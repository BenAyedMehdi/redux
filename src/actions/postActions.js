import {FETCH_POSTS,NEW_POST, DELETE_POST, UPDATE_POST} from './types'

export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts=> dispatch({
        type: FETCH_POSTS,
        payload: posts
    }));
}

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(postData)
        })
        .then(res=> res.json())
        .then(post => dispatch({
            type: NEW_POST,
            payload: post
        }))
}

export const deletePost = (id) => dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(res => dispatch({
            type: DELETE_POST,
            payload: id
        }))
}

export const updatePost = (id, newPost) => dispatch => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            method:'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(newPost)
        })
        .then(res=> res.json())
        .then(post => dispatch({
            type: UPDATE_POST,
            payload: post
        }))
}