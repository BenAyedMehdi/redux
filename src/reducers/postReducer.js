import {FETCH_POSTS,NEW_POST,DELETE_POST, UPDATE_POST} from '../actions/types'

const initialState = {
    items: [],
    item : {}
}

export default function(state = initialState , action){
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state, 
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state, 
                item: action.payload
            };
        case DELETE_POST:
            return {
                ...state, 
                items: state.items.filter(post => post.id !== action.payload)
            };
        case UPDATE_POST:
            return {
                ...state, 
                items: state.items.map(post => post.id !== action.payload.id? post : action.payload)
            };
        default: 
            return state;
    }
}