import { useOptionalUser } from "~/utils";
import { useState } from "react";
import logo from "~/Assets/Svg/DoBuLogo.jpg";
import NavBarLink from "./NavbarLink";
import { FacebookIcon, FacebookShareButton } from "react-share";
import { Form, Link } from "@remix-run/react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const user = useOptionalUser();
  console.log({ user });

  return (
    <header className="bg-gray-900 md:flex md:justify-between">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex">
          <img className="h-16 w-auto" src={logo} alt="Dobu Martial Arts Gym" />
          <div className="ml-4">
            <FacebookShareButton url="http://localhost:3000/">
              <FacebookIcon borderRadius={12} />
            </FacebookShareButton>
          </div>
        </div>
        <div className="md:hidden">
          <button
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`px-4 pt-2 pb-4 ${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center`}
      >
        <NavBarLink url="/">Home</NavBarLink>
        <NavBarLink url="/about">About Us</NavBarLink>
        <NavBarLink url="/classes">Classes</NavBarLink>
        <NavBarLink url="/membership">Membership</NavBarLink>
        {user ? (
          <Form action="/logout" method="post">
            <button
              type="submit"
              className="mt-4 rounded border-2 border-slate-700 bg-slate-600 px-4 py-2 text-blue-100 hover:bg-blue-500 active:bg-blue-600 lg:mt-0 lg:ml-4"
            >
              Logout
            </button>
          </Form>
        ) : (
          <Link
            to="/login"
            type="button"
            className="mt-4 rounded border-2 border-neutral-700 bg-neutral-300 px-4 py-2 text-neutral-900 transition-colors hover:bg-neutral-100 lg:mt-0 lg:ml-4"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};
export default NavBar;
