import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'

import { reducer as appReducer, saga as appSaga } from './app'
import { reducer as exampleReducer, saga as exampleSaga } from './example'
// import your own reducers and sagas here

const sagaMiddleware = createSagaMiddleware()
const middleware = applyMiddleware(sagaMiddleware, createLogger({ collapsed: true }))

const reducer = combineReducers({
	app: appReducer,
	example: exampleReducer,
	// add your own reducers here
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(reducer, composeEnhancers(middleware))

sagaMiddleware.run(appSaga)
sagaMiddleware.run(exampleSaga)
// run your own sagas here