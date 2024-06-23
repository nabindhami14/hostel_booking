import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
