import { addToWishlist } from '@/redux/authSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetAllWishlistItem = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
      const fetchItem = async () =>
      {
        try {
            const res = await axios.get(`${JOB_API_END_POINT}/getfromwishlist`, {withCredentials:true});
            if(res.data.success)
            {
              dispatch(addToWishlist(res.data.user.wishlist));
            }
        }catch(error)
        {
          console.log(error);
        }
      }
      fetchItem();
    }, [dispatch])
}

export default useGetAllWishlistItem;