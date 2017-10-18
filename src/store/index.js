import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import comments  from '../middlewares/comments';

const enchancer = applyMiddleware(logger, comments);

const store = createStore(reducer, enchancer)

//dev only
window.store = store

export default store