import { createSlice } from '@reduxjs/toolkit';
import { getSubreddits } from '../api/reddit';

const initialState = {
  subreddits: [],
};

const subRedditSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {
    getSubreddit(state, action) {
      state.subreddits = action.payload;
    },
  },
});

export const {
    getSubreddit
} = subRedditSlice.actions;

export default subRedditSlice.reducer;

export const fetchSubreddits = () => async (dispatch) => {
    const subreddits = await getSubreddits();
    dispatch(getSubreddits(subreddits));
};

export const selectSubreddits = (state) => state.subreddits.subreddits;
