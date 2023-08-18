// reducers.js
import { combineReducers } from 'redux';
import counterReducer from '@/redux/states/counter/counterSlice';
import userReducer from '@/redux/states/user/userSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default rootReducer;
