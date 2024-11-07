
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register.jsx'
import DriverDashboard from './pages/DriverDashboard.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element : <App/>,
    children : [
      {
        index : true,
        element : <Register/>
      },
      {
        path  :'login',
        element : <Login/>
      },
      {
        path  :'driverDashboard',
        element : <DriverDashboard/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
