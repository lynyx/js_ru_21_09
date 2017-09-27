import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'

class ArticleList extends Component {
    state = {
        openArticleId: null,
        isShowComments: false,
    }

    render() {
        const {articles} = this.props
        if (!articles.length) return <h3>No Articles</h3>
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === this.state.openArticleId}
                     onButtonClick={this.toggleArticle(article.id)}
                     isShowComments={article.id === this.state.openArticleId && this.state.isShowComments}
                     toggleComments={this.toggleComments}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    toggleArticle = (openArticleId) => (ev) => {
        this.setState((state) => {
            if (state.openArticleId === openArticleId) return {openArticleId: null};
            else return {openArticleId, isShowComments: false};
        });
    }

  toggleComments = () => {
    this.setState({isShowComments: !this.state.isShowComments})
  }
}


ArticleList.defaultProps = {
    articles: []
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticleList
