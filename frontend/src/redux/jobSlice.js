import {createSlice} from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name : "job",
  initialState : {
    allJob:[],
  },
  reducers:{
    setAllJobs : (state, action) =>
    {
      state.allJobs = action.payload;
    }
  }
});export const {setAllJobs} = jobSlice.actions;
export default jobSlice.reducer;