// import thunk from 'redux-thunk'

import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// import mealsReducer from './mealsReducer'
import monitorReducersEnhancer from '../enhancers/monitorReducer'
import loggerMiddleware from '../middleware/logger'
import rootReducer from '../reducers/reducer'

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
    //   const middlewares = [loggerMiddleware, thunk]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
//   const composedEnhancers = compose(...enhancers)
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../reducers/reducer', () => store.replaceReducer(rootReducer))
  }

  return store
}