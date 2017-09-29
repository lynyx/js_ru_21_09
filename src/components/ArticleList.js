import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import Accordeon from './AccordeonClass';
import AccordeonDecorator from '../decorators/Accordeon';

/*class ArticleList extends Accordeon {

    render() {
        const {articles} = this.props
        if (!articles.length) return <h3>No Articles</h3>
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === this.state.openArticleId}
                     onButtonClick={this.toggleArticle(article.id)}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}*/


const ArticleList = (props) => {
    // debugger;
    const {articles, openArticleId, toggleArticle } = props;
    if (!articles.length) return <h3>No Articles</h3>;
    const articleElements = articles.map((article) => (
        <li key={article.id}>
            <Article article={article}
                     isOpen={article.id === openArticleId}
                     onButtonClick={toggleArticle(article.id)}
            />
        </li>
    ));
    return (
    <ul>
      {articleElements}
    </ul>
    )
}

export default AccordeonDecorator(ArticleList);