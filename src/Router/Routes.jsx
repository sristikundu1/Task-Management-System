import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import DashBoardLayOut from "../MainLayOut/DashBoardLayOut";
import CreateTask from "../Pages/DashBoard/CreateTask/CreateTask";
import TaskList from "../Pages/DashBoard/TaskList/TaskList";


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
            },
            {
                path:"tasklist",
                element:<TaskList></TaskList>
            }
        ]
    }
])

export default Routes;