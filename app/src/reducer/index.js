import { combineReducers } from 'redux'

import userReducer from './userReducer'
import spinnerReducer from './spinnerReducer'

const rootReducer = combineReducers({
    user:userReducer,
    spiner:spinnerReducer
})

export default rootReducer;