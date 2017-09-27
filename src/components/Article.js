import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comments from './Comments';

class Article extends Component {
    static defaultProps = {

    }

    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            date: PropTypes.string.isRequired,
        }).isRequired,
        isOpen: PropTypes.bool,
        isShowComments: PropTypes.bool,
        onButtonClick: PropTypes.func,
        toggleComments: PropTypes.func,
    }

    render() {
        const {article, isOpen, onButtonClick, isShowComments, toggleComments} = this.props;
        const comments = isShowComments && (<Comments comments={article.comments} />);
        const body = isOpen && (
            <section>
                {article.text}
                {article.comments && <button onClick={toggleComments}>{isShowComments ? 'Hide' : 'Show'}</button>}
            </section>
        );

        return (
            <div>
                <h2>
                    {article.title}
                    <button onClick={onButtonClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {body}
                {comments}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }
}

export default Article
