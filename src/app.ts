import './assets/styles/style.scss'

import {createStore} from 'redux'
import { reducer } from './store/reducer'
import { addItem, changeInput, clearList } from './store/actions'


const inputField = document.getElementById('input-field')
const addButton = document.getElementById('add-button')
const clearButton = document.getElementById('clear-button')
const themeButton = document.getElementById('theme-button')
const groceryList = document.getElementById('grocery-list')!
const emptyList = document.getElementById('empty-list')!

const store = createStore(
    reducer, 
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)


inputField?.addEventListener('change', (event: Event) => {
    const target = event.target as HTMLInputElement
    store.dispatch( changeInput( target.value ) )
})

addButton?.addEventListener('click', () => {
    (inputField as HTMLInputElement).value = ''
    store.dispatch(addItem())
})

clearButton?.addEventListener('click', () => {
    store.dispatch(clearList())
})

themeButton?.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

function clear(){
    const listItems: HTMLCollection = groceryList.getElementsByTagName('li')
    for (var i = listItems.length - 1; i >= 0; --i) {
        ( listItems[i] as HTMLElement ).remove()
    }
}

function render() {
    const list = store.getState().list

    clear()
    emptyList.hidden = list.length > 0
    for(let value of list){
        const li = document.createElement('li')
        li.textContent = value
        li.className = 'list-group-item list-group-item-action'
        li.addEventListener('click', e => {
            (e.target as HTMLElement).classList.toggle('checked')
        })
        groceryList.insertAdjacentElement('beforeend', li)
    }
}


render()
store.subscribe( render )
