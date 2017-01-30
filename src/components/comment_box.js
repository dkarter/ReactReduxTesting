import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class CommentBox extends Component {
  static propTypes = {
    saveComment: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    };
  }

  handleSubmitComment = (e) => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  handleCommentChanged = (e) => {
    this.setState({ comment: e.target.value });
  }

  render() {
    return (
      <div className="comment-box">
        <textarea
          value={this.state.comment}
          onChange={this.handleCommentChanged}
        />
        <button onClick={this.handleSubmitComment} >
          Submit Comment
        </button>
      </div>
    );
  }
}


export default connect(null, actions)(CommentBox);
