import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {},
  reducers: {
    cacheSearch(state, action) {
      Object.assign(state, action.payload);
    },
  },
});
export const { cacheSearch } = searchSlice.actions;
export default searchSlice.reducer;
