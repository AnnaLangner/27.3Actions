import {CREATE_COMMENT, EDIT_COMMENT, REMOVE_COMMENT, THUMB_DOWN_COMMENT, THUMB_UP_COMMENT} from "./actions";

function comments (state = [], action) {
    switch (action.type) {
        case CREATE_COMMENT:
            return [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state];

        case EDIT_COMMENT:
            return [
                {
                    id: action.id,
                    text: action.text,
                    votes: action.votes
                }
                , ...state];

        case REMOVE_COMMENT:
            return state.comments.filter(comment => comment.id !== action.id);

        case THUMB_UP_COMMENT:
            return [
                {
                    id: action.id,
                    text: action.text,
                    votes: action.votes +1
                }
                , ...state];

        case THUMB_DOWN_COMMENT:
            return [
                {
                    id: action.id,
                    text: action.text,
                    votes: action.votes -1
                }
                , ...state];

        default:
            return state;
    }
}