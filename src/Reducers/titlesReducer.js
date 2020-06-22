import {ADD_POST,
    EDIT_POST,
    DELETE_POST,
    ADD_COMMENT,
    DELETE_COMMENT } from './actionTypes';

const INITIAL_STATE = [
    {   id: "1",
        title: "Test", 
        description: "This is a test post", 
    } 
]       
const titlesReducer = (state=INITIAL_STATE, action) => {

    switch(action.type){
        case ADD_POST:
            const {title, description} = action.postData
            return [
                ...state,
                {id: action.id, title, description}
            ]
        
        case EDIT_POST:
            return state.map(item => {
                console.log(item.id, action.id)
                if (item.id === action.id) {
                    return {...item, title: action.postData.title, description: action.postData.description}
                }
                return item
            })
                          

        case DELETE_POST:
            return state.filter(item => item.id !== action.id)

        default:
            return state
    }
}

export default titlesReducer;