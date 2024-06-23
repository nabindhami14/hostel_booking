import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  Home,
  LogOut,
  MenuIcon,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileNav() {
  return (
    <Menu>
      <MenuButton>
        <MenuIcon className="" />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="w-52 bg-gray-600 origin-top-right rounded-md border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <MenuItem>
          <Link
            to={"/"}
            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
          >
            <Home className="size-4 fill-white/30" />
            Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/hostels"
            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
          >
            <ShoppingBag className="size-4 fill-white/30" />
            Hostels
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/bookings"
            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
          >
            <ShoppingCart className="size-4 fill-white/30" />
            Bookings
          </Link>
        </MenuItem>

        <div className="my-1 h-px bg-white/5" />
        <MenuItem>
          <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
            <LogOut className="size-4 fill-white/30" />
            Logout
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
