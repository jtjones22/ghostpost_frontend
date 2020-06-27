import React from 'react'

import VoteButtons from './VoteButtons'


class Posts extends React.Component {


    render() {
        return (
            <div>
                <h3>{this.props.category}</h3>
                <h6>{this.props.time}</h6>
                {this.props.content}
                <br />
                <br />
                Upvotes: {this.props.upvotes} | 
                Downvotes: {this.props.downvotes}
                <br />
                <VoteButtons
                key={this.props.id}
                id={this.props.id}
                />

                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default Posts