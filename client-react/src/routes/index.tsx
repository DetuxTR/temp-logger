import {Route, createBrowserRouter,} from "react-router-dom";

import Home from "../pages/home";
import HomeLive from "../pages/home/homelive";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        children:[
            {
                path:'live',
                element:<HomeLive/>
            }
        ]
            
        
            
        
        
    }
]);

export default router