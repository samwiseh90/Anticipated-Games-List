import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { gamesReducer } from '../../features/games/gamesSlice';

export const store = configureStore({
  reducer: {
    games: gamesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
