import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import Users from "../../Components/Users/Users";


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Users></Users>
            <Footer></Footer>
        </div>
    );
};

export default Home;