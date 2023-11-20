import { BrowserRouter as Router, Route, Outlet, Routes } from "react-router-dom";
import './App.css';
import Footer from './layout/Footer/Footer';
import Navbar from './layout/Navbar/Navbar';
import Home from "./pages/Home";
import Services from "./pages/Services";
import BlogDetail from "./components/BlogDetail/BlogDetail";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import AdminPage from "./pages/AdminPage";
import AdminNavbar from "./layout/AdminNavbar/AdminNavbar";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import AdminAllBlogs from "./pages/AdminAllBlogs";

function App() {
  const {currentUser} = useContext(AuthContext)
  const Layout = () =>{
    return (
      <div className='app'>
        <Navbar />
        <Outlet/>
        <Footer />
      </div>
    )
  }
  const AdminLayout = () =>{
    return (
      <div className='app'>
        <AdminNavbar />
        <Outlet/>
        
      </div>
    )
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />}/>
          <Route path="/blogs/:id" element={<BlogDetail/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Route> 
        <Route path="/" element={<AdminLayout/>}>
          <Route path="/adminlogin" element={currentUser ? <AdminPage />: <Login/>} />
          <Route path="/adminpage" element={currentUser ? <AdminPage />: <Login/>} />
          <Route path="/adminallblogs" element={currentUser ? <AdminAllBlogs />: <Login/>} />
      </Route>
      </Routes>
    
     
     
    </Router>
  );
}

export default App;
