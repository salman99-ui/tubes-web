import {combineReducers , createStore} from 'redux'
import ReducerCart from './cart/reducer'
import ReducerWallet from './wallet/reducer'

const rootReducer = combineReducers({
    cart : ReducerCart ,
    wallet : ReducerWallet
})


const Store = createStore(rootReducer)

export default Store
