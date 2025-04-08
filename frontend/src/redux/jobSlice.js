import {createSlice} from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name : "job",
  initialState : {
    allJob:[],
    allAdminJobs:[],
    singlejob : null,
    searchJobByText:"",
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
    },
    setallAdminJobs:(state, action)=>
    {
      state.allAdminJobs = action.payload;
    },
    setsearchJobByText:(state, action)=>
    {
      state.searchJobByText = action.payload;
    }
  }
});
export const {setAllJobs, setSingleJob, setallAdminJobs, setsearchJobByText} = jobSlice.actions;
export default jobSlice.reducer;