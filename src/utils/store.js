import {configureStore} from "@reduxjs/toolkit"
import sideBarSlice from "./sideBarSlice";
const store=configureStore({
    reducer:{
        toggleSidebar:sideBarSlice
    }
});
export default store;