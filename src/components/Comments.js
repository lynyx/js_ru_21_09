import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Comments extends Component {
  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      user: PropTypes.string,
      text: PropTypes.string,
    })),
  };

  render() {
    const {comments} = this.props;
    const commentsList = comments.map((comment) => (
      <li key={comment.id}>
        <h4>{comment.user}</h4>
        <p>{comment.text}</p>
      </li>
    ));

    return  (
      <ul>
        {commentsList}
      </ul>
    );
  }
}

export default Comments;
