import {createSlice} from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name : "job",
  initialState : {
    allJob:[],
    singlejob : null,
  },
  reducers:{
    setAllJobs : (state, action) =>
    {
      state.allJob = action.payload;
    },
    setSingleJob:(state, action) =>
    {
      console.log(action.payload);
      state.singlejob = action.payload;
    }
  }
});
export const {setAllJobs, setSingleJob} = jobSlice.actions;
export default jobSlice.reducer;