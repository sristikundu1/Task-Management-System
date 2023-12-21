import { NavLink, Outlet } from "react-router-dom";
import { MdAddTask } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { RiImageEditFill } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";


const DashBoardLayOut = () => {
    return (
        <div className="box-border">

            <div className="flex">
                {/* <div className="w-80 min-h-screen bg-[#e85d04] py-16 px-3">
                    <h2 className="text-[rgb(21,21,21)] font-greate text-4xl text-center font-bold mb-10">AuraFeastForge</h2>
                    <ul className=" menu p-4 bg-transparent text-[#151515] font-cinzel">

                        

                                <li className=" font-medium	text-xl"><NavLink to="/dashboard/adminprofile"> Admin Profile</NavLink></li> */}
                {/* <li className=" font-medium	text-xl"><NavLink to="/dashboard/users"><IoIosPeople></IoIosPeople>Manage Users</NavLink></li>
                                <li className=" font-medium	text-xl"><NavLink to="/dashboard/addmeal"><ImSpoonKnife></ImSpoonKnife>Add meal</NavLink></li>
                                <li className=" font-medium	text-xl"><NavLink to="/dashboard/allmeal"><FaListUl></FaListUl>All meals</NavLink></li>
                                <li className=" font-medium	text-xl"><NavLink to="/dashboard/allreview"><MdRateReview></MdRateReview> All reviews</NavLink></li>
                                <li className=" font-medium	text-xl"><NavLink to="/dashboard/serve"><FaPlateWheat></FaPlateWheat> serve meals</NavLink></li>
                                <li className=" font-medium	text-xl"><NavLink to="/dashboard/upcoming"><GiHotMeal></GiHotMeal>Upcoming meals</NavLink></li> */}




                {/* <div className="divider bg-white h-1"></div> */}


                {/* <li className=" font-medium	text-xl"><NavLink to="/"><TiHome></TiHome> Home</NavLink></li> */}


                {/* </ul>

                </div> */}

                <div id="sidebar" className="sticky top-0 bottom-0 left-0 w-28 h-screen px-10 overflow-hidden transition-all ease-linear bg-[#304D30] hover:w-72 duration-500">
                    <div id="logo" className="h-20 flex gap-2 items-center justify-center mt-4">
                       <i> <img className="w-8 " src="https://cdn.iconscout.com/icon/premium/png-256-thumb/task-manager-1851416-1573466.png" alt="" /></i>
                        <h2 className="text-[#B6C4B6] text-4xl font-bold overflow-hidden">TaskGrid</h2>
                    </div>
                    <ul id="main" className="h-5/6 relative list-none p-0">
                        <NavLink to="/dashboard/addtask">
                        <li className="mx-2 transition-all rounded-lg my-5 hover:bg-[#EEF0E5] py-2">
                            <a href="#" className="font-xl flex gap-2 items-center text-[#F4EEA9] hover:text-[#161616]">
                                <i><MdAddTask className="text-3xl"></MdAddTask></i>
                                <span className="overflow-hidden font-serif text-xl">create Task</span>
                            </a>
                        </li>
                        </NavLink>
                        <li className="mx-2 transition-all rounded-lg my-5 hover:bg-[#EEF0E5]  py-2">
                            <a href="#" className="font-xl flex gap-2 items-center text-[#F4EEA9] hover:text-[#161616]">
                                <i><BsListTask className="text-3xl"></BsListTask></i>
                                <span className="overflow-hidden font-serif text-xl">Task List</span>
                            </a>
                        </li>
                        <li className="mx-2 transition-all rounded-lg my-5 hover:bg-[#EEF0E5]  py-2">
                            <a href="#" className="font-xl flex gap-2 items-center text-[#F4EEA9] hover:text-[#161616]">
                                <i><RiImageEditFill className="text-3xl"></RiImageEditFill></i>
                                <span className="overflow-hidden font-serif text-xl">Edit Task</span>
                            </a>
                        </li>
                        <li id="logout" className="absolute bottom-3 w-full mx-2 transition-all rounded-lg hover:bg-[#EEF0E5]  py-2">
                            <a href="#" className="font-xl flex gap-2 items-center text-[#F4EEA9] hover:text-[#161616]">
                                <i><IoIosLogOut className="text-3xl "></IoIosLogOut></i>
                                <span className="overflow-hidden font-serif text-xl">LogOut</span>
                            </a>
                        </li>

                    </ul>
                </div>


                <div className="flex-1 bg-[#F6F6F6] ">
                    <Outlet></Outlet>

                </div>

            </div>

        </div>
    );
};

export default DashBoardLayOut;