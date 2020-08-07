import { AppActions, ListItemType, ADD_ITEM, CLEAR_LIST, InputType, CHANGE_INPUT } from './types'

export const addItem = (): AppActions => {
    return {
        type: ADD_ITEM
    }
}

export const clearList = (): AppActions => {
    return {
        type: CLEAR_LIST
    }
}

export const changeInput = (input: InputType): AppActions => {
    return {
        type: CHANGE_INPUT,
        payload: input
    }
}