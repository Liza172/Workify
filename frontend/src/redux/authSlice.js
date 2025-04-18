import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name : "auth",
  initialState :{
    loading : false,
    user: null,
    searchQuery: "",
    wishlist: [],
  },
  reducers:{
    setLoading :(state, action) =>
    {
      state.loading = action.payload;
    },
    setUser: (state, action) =>
    {
      state.user = action.payload;
    },
    setSearchQuery:(state, action)=>
    {
      state.searchQuery = action.payload;
    },
    addToWishlist:(state, action) =>
    {
      state.wishlist = action.payload; 
    },
  }
});
export const {setLoading, setUser, setSearchQuery, addToWishlist, removeFromWishlist} = authSlice.actions;
export default authSlice.reducer;