import Posts from "../components/PostComponents/PostsSection";
import FloatingActionButton from "../components/PostComponents/addPostButton";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import CreatePost from "../pages/createPost"
import { Outlet } from "react-router-dom";


export function App() {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    <main>
      <Outlet/>
    </main>
    <footer>

    </footer>
      
    </>
  );
}

export default App;
