import React from 'react'
import {Link, BrowserRouter, Route} from 'react-router-dom'
// import url from '../containers/PostListView'

const url = 'http://127.0.0.1:8000/api/PostItem/'


class FilterButtons extends React.Component {
    state = {
        posts: []
      }
    
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
            <>
            <button onClick={this.ShowAll}>Show All</button>
            <button onClick={this.RoastsOnly}>Roasts</button>
            <button onClick={this.BoastsOnly}>Boasts</button>
            <button onClick={this.VoteScore}>Vote Score</button>
            </>
        )
    }
}

export default FilterButtons