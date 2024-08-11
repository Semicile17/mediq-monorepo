import FloatingActionButton from "../components/PostComponents/addPostButton";
import Posts from "../components/PostComponents/PostsSection";
import Sidebar from "../components/sidebar";

const Home = () =>{
    return (
       <>
       <Sidebar/>
       <Posts/>
       <FloatingActionButton/>
       </>
    );
}

export default Home ;