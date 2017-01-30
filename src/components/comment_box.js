import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  handleSubmitComment = (e) => {
    e.preventDefault();
    this.setState({ comment: '' });
  }

  handleCommentChanged = (e) => {
    this.setState({ comment: e.target.value });
  }

  render() {
    return (
      <div className="comment-box">
        <textarea value={this.state.comment} onChange={this.handleCommentChanged} />
        <button onClick={this.handleSubmitComment}>Submit Comment</button>
      </div>
    );
  }
}

export default CommentBox;
