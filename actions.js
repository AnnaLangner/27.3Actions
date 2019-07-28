import uuid from 'uuid';

const CREATE_COMMENT = 'CREATE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMENT';
const REMOVE_COMMENT = 'REMOWE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function createComment(text) {
    return {
        type: CREATE_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(text) {
    return {
        type: EDIT_COMMENT,
        text,
        id: uuid.v4()
    }
}

function removeComment(text) {
    return {
        type: REMOVE_COMMENT,
        id: uuid.v4()
    }
}

function thumbUpComment(text) {
    return {
        type: THUMB_UP_COMMENT,
        id: uuid.v4()
    }
}

function thumbDownComment(text) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: uuid.v4()
    }
}