import { createSlice } from "@reduxjs/toolkit";
const sideBarSlice = createSlice({
  name: "toggleSidebar",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closedMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});
export const { toggleMenu,closedMenu } = sideBarSlice.actions;
export default sideBarSlice.reducer;
