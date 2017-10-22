import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, START, SUCCESS } from '../constants'
// import {normalizedComments} from '../fixtures'
import {arrToMap} from './utils'
import {Record, OrderedMap} from 'immutable'

const commentRecord = Record({
    id: null,
    user: null,
    text: null,
    loading: false,
});

const reducerRecord = Record({
    entities: new OrderedMap({}),
    randomId: null,
    loaded: false,
    loading:false,
})

export default (state = new reducerRecord(), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, {
                ...payload.comment,
                id: randomId
            })
        case LOAD_ARTICLE_COMMENTS + START:
            return state.set('loading', true);
        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state
                .set('loading', false)
                .set('loaded', true)
                .set('entities', arrToMap(payload.response, commentRecord))


        /*case LOAD_ARTICLE + START:
            return state.setIn(['entities', payload.id, 'loading'], true)

        case LOAD_ARTICLE + SUCCESS:
            return state.setIn(['entities', payload.id], new ArticleRecord(payload.response))*/
    }

    return state
}
