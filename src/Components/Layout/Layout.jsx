import NavBar from "../Reuseables/NavBar/NavBar";
import {Outlet} from "react-router-dom";
import Footer from "../Reuseables/Footer/Footer";
const Layout = ()=>{
   return(
       <>
           <NavBar/>
           <Outlet/>
           <Footer/>
       </>
   )
}
export  default  Layout;