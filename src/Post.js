import React, {Component} from 'react'

class Post extends Component {
    render() {
        return (
            <div>
                <p onClick={this.props.onClick}>User: {this.props.user}</p>
                <p>{this.props.content}</p>
                <p/>
            </div>
        )
    }
}

export default Post