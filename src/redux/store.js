import { combineReducers, createStore } from 'redux'


const pizzaReduser = (state ={
    data:[],
    pedding:true,
}, action) => {
    
    switch(action.type){
        case "SET PIZZAS":
            return{ ...state, data: action.data}
        default:
            return state
    }
}    

const initialState= {
    data:[]
}
const basketReduser =(state = initialState, action) =>{
    switch(action.type){
        case "SET_NEW_PIZZA":
            return{ ...state, data:[...state.data, action.data]}
        default:
            return state
    }
}

const rootReduser = combineReducers({
    pizza:pizzaReduser,
    basket:basketReduser
})


export const store = createStore(rootReduser);
window.store = store