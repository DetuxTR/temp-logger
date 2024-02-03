import {Route, createBrowserRouter,} from "react-router-dom";

import Home from "../pages/home";
import HomeLive from "../pages/home/homelive";
import ViewLogs from "../pages/home/homelog";
const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        children:[
            {
                path:'live',
                element:<HomeLive/>
            },
            {
                path:'viewlogs',
                element:<ViewLogs/>
            }
        ]
            
        
            
        
        
    }
]);

export default router