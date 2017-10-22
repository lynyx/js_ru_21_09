import {createSelector} from 'reselect'

export const filtersSelector = state => state.filters
export const articlesMapSelector = state => state.articles.entities
export const commentsSelector = state => state.comments.entities
export const idSelector = (_, props) => props.id

export const articlesSelector = createSelector(articlesMapSelector, articles => articles.valueSeq().toArray())

export const filtratedArticlesSelector = createSelector(articlesSelector, filtersSelector, (articles, filters) => {
    const {selected, dateRange: {from, to}} = filters
    console.log('---', 'recomputing filtration')

    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})

export const createCommentSelector = () => {
    return createSelector(commentsSelector, idSelector, (comments, id) => {
        console.log('---', 'comment selector', id)
        console.log('Comments selector+++++++>>>>>>>', comments)
        return comments.get(id)
    })
}
