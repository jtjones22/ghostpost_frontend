import React from "react";

import PostList from './containers/PostListView'
import FilterButtons from './components/FilterButtons'
import { BrowserRouter, Link, Route } from "react-router-dom";

const url = 'http://127.0.0.1:8000/api/PostItem/'

class App extends React.Component {

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

  // RoastsOnly = () => {
  //   this.setState({posts: this.state.posts.filter(post => post.category_choice === 'roast')})
  // }

  RoastsOnly = () => {
    fetch(`${url}roasts/`)
    .then(res => res.json())
    .then(data => {
      this.setState({posts: data.roasts })
      console.log(data)
    })
  }

  BoastsOnly = () => {
    fetch(`${url}boasts/`)
    .then(res => res.json())
    .then(data => {
      this.setState({posts: data.boasts })
      console.log(data)
    })
  }

  VoteScore = () => {
    fetch(`${url}vote_score/`)
    .then(res => res.json())
    .then(data => {
      this.setState({posts: data.vote_score })
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
      <BrowserRouter>
      <div>
        <h4>HomePage</h4>
        <Link to={"/createpost/"}><button>Post Roast or Boast</button></Link>
        <button onClick={this.ShowAll}>Show All</button>
        <button onClick={this.RoastsOnly}>Roasts</button>
        <button onClick={this.BoastsOnly}>Boasts</button>
        <button onClick={this.VoteScore}>Vote Score</button>

        <PostList posts={this.state.posts}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;