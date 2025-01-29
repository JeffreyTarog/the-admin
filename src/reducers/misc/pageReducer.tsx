import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PageState {
  currentPageTitle: string;
}

const initialState: PageState = {
  currentPageTitle: '',
};

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPageTitle: (state, action: PayloadAction<string>) => {
      state.currentPageTitle = action.payload;
    },
  },
});

export const { setPageTitle } = pageSlice.actions;

export default pageSlice.reducer;
