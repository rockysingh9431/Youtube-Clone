import {createSlice} from "@reduxjs/toolkit";
const setSearch=createSlice({
    name:"setSearch",
    initialState:{
        search:"",
    },
    reducers:{
        searchData(state,action){
            state.search=action.payload
        }
    }
});
export const {searchData}=setSearch.actions;
export default setSearch.reducer;