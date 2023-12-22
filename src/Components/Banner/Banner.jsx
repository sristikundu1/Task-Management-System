import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Banner = () => {
    const { user } = useAuth();
    // const navigate = useNavigate();

    return (
        <div>

            <div className="flex flex-col lg:grid grid-cols-4 p-7 ">
                <div className="lg:col-span-2 pl-28 space-y-7 py-4 flex flex-col justify-center">

                    <h2 className="font-bold text-6xl mb-10 text-[#AFA939]">Effortless Task Mastery</h2>

                    {
                        user ? <>
                            <Link to="/dashboard">
                                <button className=" border border-[#006400] text-[#006400] bg-transparent rounded-md px-4 py-2 uppercase font-medium text-xl w-56 mt-10 hover:bg-[#006400] hover:text-white transition duration-300 ease-in-out">Let’s Explore</button>
                            </Link>
                        </> :
                        <>
                         <Link to="/login">
                                <button className=" border border-[#006400] text-[#006400] bg-transparent rounded-md px-4 py-2 uppercase font-medium text-xl w-56 mt-10 hover:bg-[#006400] hover:text-white transition duration-300 ease-in-out">Let’s Explore</button>
                            </Link>
                        </>
                        // navigate("/login")
                 }
                </div>

                {/* right side image */}

                <div className="col-span-2">
                    <img className=" h-[400px] w-full" src="https://img.freepik.com/free-vector/timing-project-scheduling_74855-4584.jpg" alt="" />
                </div>

            </div>


        </div>
    );
};

export default Banner;