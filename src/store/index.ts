import { createStore, combineReducers, applyMiddleware } from 'redux';
import counterReducer from 'reducers/counter';
import githubReducer from 'reducers/github';
import createSagaMiddleware from 'redux-saga';
import githubSaga from 'sagas/github';

const rootReducer = combineReducers({
  counter: counterReducer,
  github: githubReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export type RootState = ReturnType<typeof store.getState>;
sagaMiddleware.run(githubSaga);
