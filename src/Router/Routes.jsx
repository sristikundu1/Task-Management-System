import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import DashBoardLayOut from "../MainLayOut/DashBoardLayOut";
import CreateTask from "../Pages/DashBoard/CreateTask/CreateTask";
import TaskList from "../Pages/DashBoard/TaskList/TaskList";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Calender from "../Pages/Calender/Calender";
import Profile from "../Pages/Profile/Profile";
import FeedBack from "../Pages/FeedBack/FeedBack";


const Routes = createBrowserRouter([
    {
        path:"/",
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            },
            {
                path:"/calender",
                element:<Calender></Calender>
            },
            {
                path:"/profile",
                element:<Profile></Profile>
            },
            {
                path:"/feedback",
                element:<FeedBack></FeedBack>
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