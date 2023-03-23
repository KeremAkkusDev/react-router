//  => <Home/>
// home => <Home/>
// about => <About/>
// products => <Products/>
// help => HelpLayout
// help/contact => Contact
// help/faq => Faq

import { createBrowserRouter, RouterProvider } from "react-router-dom"

//LAYOUTS
import { MainLayout } from "./layouts/MainLayout";
import { HelpLayout } from "./layouts/HelpLayout";
import { UsersLayout } from "./layouts/UsersLayout";

//PAGES
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Contact, contactAction } from "./Pages/Help/Contact";
import Faq from "./Pages/Help/Faq";
import {Users,usersLoader} from "./Pages/User/Users";
import { UserDetails, userDetailsLoader } from "./Pages/User/UserDetails";
import Page404 from "./Pages/Page404";
import UsersError from "./Pages/User/UsersError";


const router = createBrowserRouter ([
  {
  path:'/', 
  element:<MainLayout/>,
  children:
  [
    {index:true, element:<Home/>},
    {path:'home', element:<Home/>},
    {path:'about', element:<About/>},
    {
      path:'help', element:<HelpLayout/>,
      children:[
        {path:'contact', element:<Contact/>, action: contactAction},
        {path:'faq', element:<Faq/>}
      ]
    },
    {
      path:'users',
      element:<UsersLayout/>,
      errorElement: <UsersError/>,
      children:[
      {index:true, element: <Users/>, loader: usersLoader},
      {path:':userid', element:<UserDetails/>, loader:userDetailsLoader},
      ]
    },
    { path:"*", element:<Page404/> }
    
  ]}, 
  
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
