import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-12 border-b flex items-center justify-between">
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

      <Menu className="block sm:hidden w-5 h-5" />
    </nav>
  );
};

export default Navbar;
