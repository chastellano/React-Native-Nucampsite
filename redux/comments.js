import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_COMMENT:
            const newComment = action.payload
            newComment.id = state.comments.length;
            console.log(action.payload);
            // const updatedComments = state.comments.concat(action.payload)
            return { ...state, errMess: null, comments: state.comments.concat(newComment) }

        default:
            return state;
    }
};