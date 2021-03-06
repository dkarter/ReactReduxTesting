import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const CommentList = (props) => {
  const comments = props.comments.map((comment, i) => {
    return (
      <li className="comment" key={i}>{ comment }</li>
    );
  });

  return (
    <ul className="comment-list">
      { comments }
    </ul>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
