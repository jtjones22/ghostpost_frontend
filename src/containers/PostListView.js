import React from 'react'

import Posts from '../components/Post'

const url = 'http://127.0.0.1:8000/api/PostItem/'

class PostList extends React.Component {
    render() {
        return (
            this.props.posts.map(post => (
                <Posts 
                key={post.id}
                id={post.id}
                content={post.text}
                category={post.category_choice}
                upvotes={post.upvotes}
                downvotes={post.downvotes}
                time={post.submission_time}
                />
            ))
        )
    }
}

export default PostList