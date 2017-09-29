import React, { Component }  from 'react';

export default (PreviousComponent) => class Decorated extends Component {
  state = {
    openArticleId: null
  };

  toggleArticle = (openArticleId) => {
    if (this.memoized.get(openArticleId)) return this.memoized.get(openArticleId)
    const func = (ev) => {
      this.setState({
        openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
      })
    }

    this.memoized.set(openArticleId, func)

    return func
  }

  memoized = new Map()

  render() {
    return <PreviousComponent {...this.props} openArticleId={this.state.openArticleId} toggleArticle={this.toggleArticle} />
  }
}