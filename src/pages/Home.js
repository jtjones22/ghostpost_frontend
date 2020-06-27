import React from 'react'
import {Link} from 'react-router-dom'

import PostList from '../containers/PostListView'
import FilterButtons from '../components/FilterButtons'

const url = 'http://127.0.0.1:8000/api/PostItem/'

class Home extends React.Component {
    state = {
        posts: []
    }
    componentDidMount() {
        fetch(url)
        .then(res => res.json())
        .then(data => {
          this.setState({posts: data})
          console.log(data)
        })
    }
    RoastsOnly = () => {
        fetch(`${url}roasts/`)
        .then(res => res.json())
        .then(data => {
          this.setState({posts: data.roasts})
          console.log(data)
        })
      }
    
    BoastsOnly = () => {
        fetch(`${url}boasts/`)
        .then(res => res.json())
        .then(data => {
            this.setState({posts: data.boasts})
            console.log(data)
        })
    }

    VoteScore = () => {
        fetch(`${url}vote_score/`)
        .then(res => res.json())
        .then(data => {
            this.setState({posts: data.vote_score})
            console.log(data)
        })
    }

    ShowAll = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            this.setState({posts: data})
            console.log(data)
        })
    }
    render() {
        return (
            <div>
                <h2>Homepage</h2>
                <Link to='/createpost'><button>Create Roast or Boast</button></Link>
                <br />
                <br />
                <button onClick={this.ShowAll}>Show All</button>
                <button onClick={this.RoastsOnly}>Roasts</button>
                <button onClick={this.BoastsOnly}>Boasts</button>
                <button onClick={this.VoteScore}>Vote Score</button>
                <PostList posts={this.state.posts}/>
            </div>
        )
    }
}

export default Home
