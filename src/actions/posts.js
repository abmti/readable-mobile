import {POST_DELETED, POST_FAILED, POST_LOADED, POST_VOTED, POSTS_SEARCHED} from '../utils/ActionTypes'
import * as PostsApi from '../utils/PostsAPI';


export const search = () => {
    return (dispatch) => {
        return PostsApi.getAll()
            .then((posts) => dispatch({type: POSTS_SEARCHED, posts}))
    }
}


export const load = (id) => {
    return (dispatch) => {
        return PostsApi.get(id).then((post) => {
            if(post != undefined && post.id != undefined) {
                dispatch({type: POST_LOADED, post})
            } else {
                dispatch({type: POST_FAILED})
                throw new Error('Record not found');
            }
        })
    }
}


export const vote = (post, vote) => {
    return (dispatch) => {
        return PostsApi.vote(post, vote)
            .then((post) => dispatch({type: POST_VOTED, post}))
    }
}

export const remove = (id) => {
    return (dispatch) => {
        return PostsApi.remove(id)
            .then((post) => {
                dispatch(removed(post))
            })
    }
}

export const removed = (post) => {
    return {
        type: POST_DELETED,
        post
    }
}