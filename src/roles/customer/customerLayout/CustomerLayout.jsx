import { Outlet } from "react-router-dom";
import Navbar from "../customerComponents/Navbar";
import Footer from "../customerComponents/Footer";

const CustomerLayout = () => {
  return (
    <div>
        <Navbar />
        <div>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default CustomerLayout;