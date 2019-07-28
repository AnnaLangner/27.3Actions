import { combineReducers } from 'redux';
import comments from './comments';

const app = combineReducers({
    comments
});

const initialState = {
    comments: [],
    users: []
};

function app(state = initialState, action) {
    return {
        comments: comments(state.comments, action)
    };
}