import { setCompanies} from '@/redux/companySlice';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetALLCompanies = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
      const fetchcompanies = async () =>
      {
        try {
            const res = await axios.get(`${COMPANY_API_END_POINT}/get`, {withCredentials:true});
            if(res.data.success)
            {
              dispatch(setCompanies(res.data.companies));
            }
        }catch(error)
        {
          console.log(error);
        }
      }
      fetchcompanies();
    }, [])
}

export default useGetALLCompanies