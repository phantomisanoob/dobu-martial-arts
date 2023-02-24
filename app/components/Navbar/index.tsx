import { Link } from "@remix-run/react";
import logo from "~/Assets/Svg/DoBuLogo.png";
const Navbar = () => {
  return (
    <header className=" bg-gray-900">
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <img className="h-16 w-auto" src={logo} alt="DoBu Martial Art Gym" />
        </div>
        <div>
          <button
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            type="button"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <Link to="#" className="block text-white">
          Home
        </Link>
        <Link to="#" className="block text-white">
          about us
        </Link>
        <Link to="#" className="block text-white">
          Classes
        </Link>
        <Link to="#" className="block text-white">
          Membership
        </Link>
        <Link to="#" className="block text-white">
          Login
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
