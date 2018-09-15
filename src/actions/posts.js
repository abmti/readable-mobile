import {POST_FAILED, POST_LOADED, POSTS_SEARCHED} from '../utils/ActionTypes'
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