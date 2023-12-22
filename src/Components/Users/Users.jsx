import Marquee from "react-fast-marquee";

const Users = () => {
    return (
        <div>
            <h2 className="font-bold text-3xl text-center  text-[#AC4425] my-10">Our Users</h2>
            <Marquee pauseOnHover={true} speed={100} className="my-16">
               
                <span className="mr-8 text-xl font-serif">Project Managers</span>
                <span className="mr-8 text-xl font-serif">Freelancers</span>
                <span className="mr-8 text-xl font-serif">Students</span>
                <span className="mr-8 text-xl font-serif">Event Planners</span>
                <span className="mr-8 text-xl font-serif">HR Departments</span>
                <span className="mr-8 text-xl font-serif">Doctors</span>
               
            </Marquee>

        </div>
    );
};

export default Users;