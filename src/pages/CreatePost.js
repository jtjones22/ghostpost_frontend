import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const url = 'http://127.0.0.1:8000/api/PostItem/'

class CreatePost extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            category_choice: '',
            text: ''
        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(e) {
        e.preventDefault()
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        })
        this.props.history.push('/')
    }
    onChange(e) {
        console.log(e.target.value)
        console.log(this.state.category)

        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <>
                <h3>CREATE POST</h3>
                <form onSubmit={this.onSubmit}>
                    <input 
                    name='category_choice'
                    type='radio'
                    checked={this.state.category_choice === 'roast'}
                    onChange={this.onChange}
                    value='roast'
                    /> Roast
                    <br />

                    <input 
                    name='category_choice'
                    type='radio'
                    checked={this.state.category_choice === 'boast'}
                    onChange={this.onChange}
                    value='boast'
                    /> Boast
                    <br />

                    <input
                    name='text'
                    onChange={this.onChange}
                    />
                    <button type='submit'>POST</button>
                    {this.state.content}
                    <Link to='/'><h5>Homepage</h5></Link>
                </form>
                
            </>
        )
    }
}

export default withRouter(CreatePost)