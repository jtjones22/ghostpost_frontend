import React from 'react'

const url = 'http://localhost:8000/api/PostItem/'

class VoteButtons extends React.Component {
    UpvoteHandler = () => {
        fetch(`${url}${this.props.id}/upvote/`)
        .then(res => res.json())
        .then(data => console.log(data))

        window.location.reload();
    }
    DownvoteHandler = () => {
        fetch(`${url}${this.props.id}/downvote/`)
        .then(res => res.json())
        .then(data => console.log(data))

        window.location.reload();
    }

    render() {
        return (
            <>
            <button onClick={this.UpvoteHandler}>UPVOTE</button>
            <button onClick={this.DownvoteHandler}>DOWNVOTE</button>
            </>
        )
    }
}

export default VoteButtons