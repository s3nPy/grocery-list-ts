export const ADD_ITEM = "ADD_ITEM"
export const CLEAR_LIST = "CLEAR_LIST"
export const CHANGE_INPUT = "CHANGE_INPUT"

export type ActionTypes = typeof ADD_ITEM | typeof CLEAR_LIST | typeof CHANGE_INPUT
export type InputType = string 
export type ListItemType = string

export interface AppState {
    input: InputType
    list: ListItemType[]
}

interface ChangeInputAction {
    type: typeof CHANGE_INPUT
    payload: InputType
}

interface AddItemAction {
    type: typeof ADD_ITEM
}

interface ClearListAction {
    type: typeof CLEAR_LIST
}

export type AppActions = AddItemAction | ClearListAction | ChangeInputAction