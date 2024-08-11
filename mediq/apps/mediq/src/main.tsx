import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {createBrowserRouter,
        RouterProvider        
} from "react-router-dom";
import CreatePost from './pages/createPost';

import App from './app/app';
import Home from './pages/homePage';


const paths = [
  {
    path:"/",
    element:<Home/>
   }, 
  {
    path:"/create_post",
    element:<CreatePost/>
   }
];

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: paths,
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
   <RouterProvider router={appRouter} />
  </StrictMode>
);
