import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  router: routerReducer,
  counter,
  form: formReducer
})
