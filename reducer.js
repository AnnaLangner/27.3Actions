import {CREATE_COMMENT} from './actions'
import {EDIT_COMMENT} from './actions'
import {REMOVE_COMMENT} from './actions'
import {THUMB_UP_COMMENT} from './actions'
import {THUMB_DOWN_COMMENT} from './actions'

const initialstate = {
    comments: [],
    users: []
};

function reducer(state = initialstate, action) {
    switch (action.type) {
        case CREATE_COMMENT:
            return Object.assign({}, state, {
                comments: [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state]
            });
        case EDIT_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        id: action.id,
                        text: action.text,
                        votes: action.votes
                    }
                    , ...state]
            });
        case REMOVE_COMMENT:
            return Object.assign({}, state, {
                comments: state.comments.filter(comment => comment.id !== action.id)
        });
        case THUMB_UP_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        id: action.id,
                        text: action.text,
                        votes: action.votes +1
                    }
                    , ...state]
            });
        case THUMB_DOWN_COMMENT:
            return Object.assign({}, state, {
                comments: [
                    {
                        id: action.id,
                        text: action.text,
                        votes: action.votes -1
                    }
                    , ...state]
            });
        default:
            return state;
    }
}