import { AppState, AppActions, ADD_ITEM, CLEAR_LIST, CHANGE_INPUT } from "./types"


const initialState: AppState = {
    input: '',
    list: []
}

export const reducer = (state = initialState, action: AppActions): AppState => {
    switch(action.type){
        case ADD_ITEM:
            return {
                ...state,
                list: state.list.concat([state.input])
            }
        case CLEAR_LIST:
            return {
                ...state,
                list: []
            }
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.payload
            }
        default:
            return state
    }
}