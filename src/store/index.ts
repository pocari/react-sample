import { createStore, combineReducers } from 'redux'
import counterReducer from 'reducer'

const rootReducer = combineReducers({
  counter: counterReducer
})

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);

