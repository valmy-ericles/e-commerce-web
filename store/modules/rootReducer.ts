import { combineReducers } from 'redux'

import auth from './auth/reducer'
import search from './amdin/shared/search/reducer';

export default combineReducers({
  auth,
  search,
})