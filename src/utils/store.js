import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import searchSlice from "./searchSlice";
import setSearch from "./setSearch";
import chatSlice from "./chatSlice";
const store = configureStore({
  reducer: {
    sidebar: sideBarSlice,
    search: searchSlice,
    searchText: setSearch,
    liveChat: chatSlice,
  },
});
export default store;
