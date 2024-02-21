import { createSlice } from "@reduxjs/toolkit";
const sideBarSlice = createSlice({
  name: "toggleSidebar",
  initialState: {
    isMenuOpen: true,
    isWatchPage: false
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closedMenu: (state) => {
      state.isMenuOpen = false;
    },
    openMenu:(state)=>{
      state.isMenuOpen=true;
    },
    onWatchPage:(state)=>{
      state.isWatchPage=true;
    },
    onHome:(state)=>{
      state.isWatchPage=false;
    }
  },
});
export const { toggleMenu,closedMenu,openMenu,onWatchPage,onHome} = sideBarSlice.actions;
export default sideBarSlice.reducer;
