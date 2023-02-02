import { createSlice } from '@reduxjs/toolkit';
import { GAMES } from '../../app/shared/GAMES';

const initialState = {
    gamesArray: GAMES
};

const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        addComment: (state, action) => {
            console.log('addGame action.payload:', action.payload);
            console.log('addGame state.gamesArray:', state.gamesArray);
            const newGame = {
                id: state.gamesArray.length + 1,
                ...action.payload
            };
            state.gamesArray.push(newGame);
        }
    }
});

export const gamesReducer = gamesSlice.reducer;

export const { addGame } = gamesSlice.actions;

export const selectGamesByGameId = (gameId) => (state) => {
    return state.comments.gamesArray.filter(
        (game) => game.gameId === parseInt(gameId)
    );
};

