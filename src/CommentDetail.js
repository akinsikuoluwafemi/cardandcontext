import React, { Component } from 'react';

class CommentDetail extends Component {
    render() {
        return (
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={this.props.image()} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {this.props.name}
                    </a>
                    <div className="metadata">
                        <span className="date">{this.props.time}</span>
                    </div>
                    <div className="text"> {this.props.text}</div>
                </div>
            </div>
        )
    }
}

export default CommentDetail;