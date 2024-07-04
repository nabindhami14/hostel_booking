import { useState, useEffect, useRef } from "react";
import { Home, LogOut, Menu, ShoppingBag, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button onClick={toggleMenu}>
        <Menu />
      </button>

      {isOpen && (
        <div className="z-10 origin-top-right absolute right-0 mt-2 w-52 rounded-md shadow-lg bg-gray-100">
          <div className="py-1">
            <Link
              to={"/"}
              onClick={closeMenu}
              className="group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Home className="w-5 h-5 mr-2" />
              Home
            </Link>
            <Link
              to="/hostels"
              onClick={closeMenu}
              className="group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Hostels
            </Link>
            <Link
              to="/bookings"
              onClick={closeMenu}
              className="group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Bookings
            </Link>
            <div className="h-px my-1 bg-gray-200"></div>
            <button className="group flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
