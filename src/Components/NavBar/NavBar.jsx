import { Link, NavLink } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import useAuth from "../../Hooks/useAuth";

const NavBar = () => {

    const { user, logOut } = useAuth()


    const handleLogOut = () => {
        logOut()
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.error(error);
            })

    }

    const navLinks = <>
        <ul className="flex gap-9 text-lg font-semibold" >
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#91B029] underline italic" : ''
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/calender"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#91B029] underline italic" : ''
                    }
                >
                    Calendar
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/profile"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending " : isActive ? "text-[#91B029] underline italic" : ''
                    }
                >
                    Profile
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/feedback"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending " : isActive ? "text-[#91B029] underline italic" : ''
                    }
                >
                    Feedback
                </NavLink>
            </li>
        </ul>
    </>


    return (
        <div>

            <div className="navbar bg-transparent px-16">
                <div className="navbar-start flex flex-col">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex ">
                        
                        <h2 className="btn btn-ghost font-bold text-3xl text-[#004b23]">TaskGrid</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex flex-col lg:navbar-end lg:flex lg:flex-row ">
                   
                    {
                        user ? <>
                            <p>{user?.displayName}</p>
                            <img className="w-12 mx-2 rounded-full" src={user?.photoURL} alt="" />

                            <button onClick={handleLogOut} className="bg-[#006400]  border rounded-lg h-10 w-28 py-1 px-9 font-semibold text-white">LogOut</button>

                        </>
                            :
                            <>
                                <BsPersonCircle className="text-5xl mr-4"></BsPersonCircle>
                                <Link to="/login">
                                    <button className="btn bg-[#006400] text-white">Login</button>
                                </Link>
                            </>
                    }
                </div>


            </div>
        </div>


    );
};

export default NavBar;