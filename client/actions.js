import fetch from 'isomorphic-fetch';

export const FETCHED_POSTS = 'FETCHED_POSTS';
export const FETCHING = 'FETCHING';
export const FETCH_ERROR = 'FETCH_ERROR';
export const TYPING = 'TYPING';

export function typeInSubreddit(event) {
    return (dispatch) => {
        dispatch({type: TYPING, payload: event});
    }
}

export function fetchPosts(subreddit='all') {
    return (dispatch) => {
        if (subreddit !== "") {
            dispatch({type: FETCHING});

            fetch('https://www.reddit.com/r/'+subreddit+'.json')
                .then(response => response.json())
                .then(json => {
                    if (json['error']) {
                        dispatch({type: FETCH_ERROR, payload: json['message']});
                    } else {
                        dispatch({type: FETCHED_POSTS, payload: json['data']['children'], subreddit});
                    }
                });
        }
    }
}
