import { setAllApplicants } from "@/redux/applicationSlice";
import { setAllAppliedJobs } from "@/redux/jobSlice";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetApplidJobs = () =>
{
  const dispathch = useDispatch();

  useEffect(() =>
  {
    const fetchAppliedJobs = async () =>
    {
      try{
          const res = await axios.get(`${APPLICATION_API_END_POINT}/get`, {withCredentials:true});
          console.log(res);
          if(res.data.success)
          {
            dispathch(setAllAppliedJobs(res.data.application));
          }
      }catch(error)
      {
        console.log(error);
      }
    }
    fetchAppliedJobs();
  }, [])
}
export default useGetApplidJobs;