import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toolkitSlice from '../Reducers/Reducers';

const reducer = combineReducers({
  toolkit: toolkitSlice
})

export const store = configureStore({
  reducer,
  devTools: true,
})