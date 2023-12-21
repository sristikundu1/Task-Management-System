import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import DashBoardLayOut from "../MainLayOut/DashBoardLayOut";
import CreateTask from "../Pages/DashBoard/CreateTask/CreateTask";


const Routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    },
    {
        path:"dashboard",
        element:<DashBoardLayOut></DashBoardLayOut>,
        children:[
            {
                path:"addtask",
                element:<CreateTask></CreateTask>
            }
        ]
    }
])

export default Routes;