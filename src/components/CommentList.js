import React, {Component} from 'react'
import { connect } from 'react-redux';
import { loadArticleComments } from '../AC';
import Comment from './Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm'
import Loader from './Loader';

class CommentList extends Component {
    static defaultProps = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return (
            <div>
                <button onClick={toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const { article: {id, comments = []}, isOpen, loading } = this.props
        if (loading) return <Loader />
        if (!isOpen) return null

        const body = comments.length ? (
            <ul>
                {comments.map(id => <li key = {id}><Comment id = {id} /></li>)}
            </ul>
        ) : <h3>No comments yet</h3>

        return (
            <div>
                {body}
                <CommentForm articleId = {id} />
            </div>
        )
    }
}


export default connect(state => ({
    loading: state.comments.loading
}), {loadArticleComments})(toggleOpen(CommentList))
