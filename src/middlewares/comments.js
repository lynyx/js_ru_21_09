import { ADD_COMMENT } from '../constants';

export default store => next => action => {
    const { type, payload } = action;

    if (type === ADD_COMMENT) {
        const {text, user} = payload;
        const id = Date.now().toString();
        Object.assign(action, {payload: {id, user, text} });
    }

    next(action);
};