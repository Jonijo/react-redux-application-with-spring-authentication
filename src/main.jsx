import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home.jsx';
import Login from './routes/Login.jsx';
import Users from './routes/Users.jsx';
import ErrorPage from './error-page.jsx';
import Root from './routes/root.jsx';
import { store } from './app/store'
import { Provider } from 'react-redux'
import { getUsersById } from './services/apiCalls.js';
import Loading from './components/Loading.jsx';
import User from './routes/User.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children : [

      {
        path: "/",
        element: <Home/>
      },

      {
        path: "/home",
        element: <Home/>
      },
    
      {
        path: "/login",
        element: <Login/>
      },
    
      {
        path: "/users",
        element: <Users/>,
      },
      {
        path: "/user/:id",
        element: <User/>,
        loader : getUsersById,
        hydrateFallbackElement : <Loading/>
      }
    ]

  }

]);

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
)
