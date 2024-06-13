

import CreateAppointmentPage from './pages/CreateAppointmentPage'

import HomePage from './pages/HomePage'
import MyAppointmentPage from './pages/MyAppointmentPage'
import ProfilePage from './pages/ProfilePage'
import RegPage from './pages/RegPage'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path:"/",
    element: <HomePage /> 
  },
  {
    path:"/createappointment",
    element: <CreateAppointmentPage /> 
  },
  {
    path:"/myappointments",
    element: <MyAppointmentPage /> 
  },
  {
    path:"/profile",
    element: <ProfilePage /> 
  },
  {
    path:"/registration",
    element: <RegPage /> 
  },
]);

function App() {
  
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
