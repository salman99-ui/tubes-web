import {combineReducers , createStore} from 'redux'
import ReducerCart from './cart/reducer'
import ReducerWallet from './wallet/reducer'
import ReducerUser from './user/reducer'
const rootReducer = combineReducers({
    cart : ReducerCart ,
    wallet : ReducerWallet ,
    user : ReducerUser
})


const Store = createStore(rootReducer)

export default Store
