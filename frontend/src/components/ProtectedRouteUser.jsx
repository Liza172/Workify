import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const ProtectedRouteUser = ({children}) => {
  const {user} = useSelector(store=>store.auth)

  const navigate = useNavigate();

  useEffect(() =>
  {
    if(user && user.role !== 'student')
    {
      navigate("/admin/companies")
    }
  }, []) 
  return (
    <>
      {children}
    </>
  )
}
export default ProtectedRouteUser
