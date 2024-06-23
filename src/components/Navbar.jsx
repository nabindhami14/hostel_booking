import { Link } from "react-router-dom";
import MobileNav from "./common/mobile-nav";

const Navbar = () => {
  return (
    <header className="w-full border-b">
      <nav className="w-11/12  h-12 mx-auto flex items-center justify-between">
        <h2>MOHAN SOLUTIONS</h2>
        <ul className="hidden sm:flex items-center gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hostels">Hostels</Link>
          </li>
          <li>
            <Link to="/bookings">Bookings</Link>
          </li>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
        </ul>
        <div className="block sm:hidden">
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
