import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { MdAddTask } from "react-icons/md";
import { BsListTask } from "react-icons/bs";
import { RiImageEditFill } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import useAuth from "../Hooks/useAuth";


const DashBoardLayOut = () => {

    const { user, logOut } = useAuth()
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then((result) => {
                console.log(result.user);
                // navigate("/");

            })
            .catch((error) => {
                console.error(error);
            })

    }
    return (
        <div className="box-border">

            <div className="flex">

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


                        <NavLink to="/dashboard/tasklist">
                            <li className="mx-2 transition-all rounded-lg my-5 hover:bg-[#EEF0E5]  py-2">
                                <a href="#" className="font-xl flex gap-2 items-center text-[#F4EEA9] hover:text-[#161616]">
                                    <i><BsListTask className="text-3xl"></BsListTask></i>
                                    <span className="overflow-hidden font-serif text-xl">Task List</span>
                                </a>
                            </li>
                        </NavLink>

                        <NavLink to="/dashboard/editask">
                            <li className="mx-2 transition-all rounded-lg my-5 hover:bg-[#EEF0E5]  py-2">
                                <a href="#" className="font-xl flex gap-2 items-center text-[#F4EEA9] hover:text-[#161616]">
                                    <i><RiImageEditFill className="text-3xl"></RiImageEditFill></i>
                                    <span className="overflow-hidden font-serif text-xl">Edit Task</span>
                                </a>
                            </li>
                        </NavLink>

                        {
                            user ? <>


                                <li id="logout" className="absolute bottom-3 w-full mx-2 transition-all rounded-lg hover:bg-[#EEF0E5]  py-2">
                                    <a href="#" onClick={handleLogOut} className="font-xl flex gap-2 items-center text-[#F4EEA9] hover:text-[#161616]">
                                        <i><IoIosLogOut className="text-3xl "></IoIosLogOut></i>
                                        <span className="overflow-hidden font-serif text-xl">LogOut</span>
                                    </a>
                                </li>

                            </>
                                :
                               
                                     navigate("/")
                                
                        }

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