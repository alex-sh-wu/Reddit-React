import { combineReducers } from 'redux';
import { FETCHED_POSTS, FETCHING, TYPING, FETCH_ERROR } from './actions.js'

const userReducer = (state={}, action) => {
    switch(action.type) {
        case "LOGIN":
            return Object.assign({}, state, {user: action.payload});
        default:
            return state;
    }
}

const postsReducer = (state=[], action) => {
    switch(action.type) {
        case FETCHED_POSTS:
            return action.payload;
        default:
            return state;
    }
}

const fetchReducer = (state=false, action) => {
    switch(action.type) {
        case FETCHING:
            return true;
        case FETCH_ERROR:
        case FETCHED_POSTS:
            return false;
        default:
            return state;
    }
}

const getDate = () => {
    let currentTime = new Date();
    return currentTime.toString();
}

const timeReducer = (state=null, action) => {
    switch(action.type) {
        case FETCHED_POSTS:
            return getDate();
        default:
            return state;
    }
}

const subredditReducer = (state="", action) => {
    switch(action.type) {
        case FETCHED_POSTS: //if the user clicks on 'Fetch From All', the input field gets updated
            return action.subreddit;
        case TYPING:
            return action.payload.target.value;
        default:
            return state;
    }
}

const errorReducer = (state=null, action) => {
    switch(action.type) {
        case FETCH_ERROR:
            return action.payload;
        case TYPING:
        case FETCHING:
            return null;
        default:
            return state;
    }
}

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
    fetching: fetchReducer,
    fetchError: errorReducer,
    lastUpdated: timeReducer,
    subreddit: subredditReducer
});

export default reducers;
