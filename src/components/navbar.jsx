import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border-b mb-4 px-4 sm:px-6 lg:px-8 flex justify-center space-x-4 h-16 items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-md font-medium transition-colors text-black border-b-2"
            : "text-sm font-medium transition-colors hover:text-black"
        }
      >
        Products
      </NavLink>

      <NavLink
        to="/table"
        className={({ isActive }) =>
          isActive
            ? "text-md font-medium transition-colors text-black border-b-2"
            : "text-sm font-medium transition-colors hover:text-black"
        }
      >
        Table
      </NavLink>
    </div>
  );
};

export default Navbar;
