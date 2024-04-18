import { useLoaderData } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../../Shared/NavBar/Navbar";
import RightSideNav from "../../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {

    const news = useLoaderData();
    // console.log(news);

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className=" lg:col-span-2">
                    {
                        news.map (aNews => <NewsCard key={aNews._id} news={aNews} ></NewsCard>)
                    }

                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;