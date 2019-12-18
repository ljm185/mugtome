import React, {Component} from 'react'
import Post from './Post'

class PostContainer extends Component {

    constructor() {
        super()
        this.state = { 
            postList: [],
            h2Value: null 
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/posts")
            .then(resp => resp.json())
            .then(data => this.setState({
                postList: data
            }))
    }

    handleClick = (e) => {
        console.log("clicked target:", e.target.innerText.slice(6))
        this.setState({ h2Value: e.target.innerText.slice(6) })
    }

    render() {
        console.log(this.state.postList)
        const posts = this.state.postList.map((post, id) => <Post key={id} {...post} onClick={this.handleClick}/>)
        return (
            <div className="postContainer">
                <h2>{this.state.h2Value}</h2>
                {posts}
            </div>
        )
    }

}

export default PostContainer