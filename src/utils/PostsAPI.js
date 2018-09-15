
import {hostApi, getHeaders} from './Api'


export const get = async (postId) => {
    const headers = await getHeaders()
    return fetch(`${hostApi}/posts/${postId}`, {headers})
        .then(res => res.json())
}


export const getAll = async () => {
    const headers = await getHeaders()
    return fetch(`${hostApi}/posts`, {headers})
        .then(res => res.json())
        .then(data => data)
}


export const searchPostsByCategory = async (category) => {
    const headers = await getHeaders()
    let url = `${hostApi}/${category}/posts`
    return fetch(url, { headers })
        .then(res => res.json())
        .then(data => data)
}


export const create = async (post) => {
    const headers = await getHeaders()
    return fetch(`${hostApi}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then(res => res.json())
}


export const update = async (post) => {
    const headers = await getHeaders()
    return fetch(`${hostApi}/posts/${post.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then(res => res.json())
}


export const remove = async (id) => {
    const headers = await getHeaders()
    return fetch(`${hostApi}/posts/${id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
    }).then(res => res.json())
}


export const search = async (query, maxResults) => {
    const headers = await getHeaders()
    return fetch(`${hostApi}/search`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({query, maxResults})
    }).then(res => res.json())
        .then(data => data.posts)
}


export const vote = async (post, vote) => {
    const headers = await getHeaders()
    return fetch(`${hostApi}/posts/${post.id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({option: vote})
    }).then(res => res.json())
}