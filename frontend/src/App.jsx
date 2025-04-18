import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from './components/admin/AdminJobs'
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
import ProtectedRoute from './components/admin/ProtectedRoute'
import ProtectedRouteUser from './components/ProtectedRouteUser'
import ProtectedUnauthorizedUser from './components/ProtectectedUnauthorizedUser'
import Wishlist from './components/Wishlist'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element : <Home/>
  },
  {
    path: '/login',
    element : <Login/>
  },
  {
    path: '/signup',
    element : <Signup/>
  },
  {
    path: '/jobs',
    element : <ProtectedUnauthorizedUser><ProtectedRouteUser><Jobs/></ProtectedRouteUser></ProtectedUnauthorizedUser>
  },
  {
    path: '/browse',
    element : <ProtectedUnauthorizedUser><ProtectedRouteUser><Browse/></ProtectedRouteUser></ProtectedUnauthorizedUser>
  },
  {
    path: '/wishlist',
    element : <ProtectedUnauthorizedUser><ProtectedRouteUser><Wishlist/></ProtectedRouteUser></ProtectedUnauthorizedUser>
  },
  {
    path: '/description/:id',
    element : <ProtectedUnauthorizedUser><ProtectedRouteUser><JobDescription/></ProtectedRouteUser></ProtectedUnauthorizedUser>
  },
  {
    path: '/profile',
    element : <ProtectedRouteUser><Profile/></ProtectedRouteUser>
  },

  //admin
  {
    path: '/admin/companies',
    element : <ProtectedRoute><Companies/></ProtectedRoute>
  },
  {
    path: '/admin/companies/create',
    element : <ProtectedRoute><CompanyCreate/></ProtectedRoute>
  },
  {
    path : "/admin/companies/:id",
    element : <ProtectedRoute><CompanySetup/></ProtectedRoute>
  },
  {
    path : "/admin/jobs",
    element : <ProtectedRoute><AdminJobs/></ProtectedRoute>
  },
  {
    path : "/admin/jobs/create",
    element : <ProtectedRoute><PostJob/></ProtectedRoute>
  },
  {
    path : "/admin/jobs/:id/applicants",
    element : <ProtectedRoute><Applicants/></ProtectedRoute>
  },

])

function App() {

  return (
    <div>
      <RouterProvider router = {appRouter}/>
    </div>
  )
}

export default App
