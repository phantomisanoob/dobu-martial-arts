import { Link } from "@remix-run/react";

type NavBarLinkProps = {
  children: React.ReactNode;
  url: string;
};

const NavBarLink = ({ children, url }: NavBarLinkProps) => {
  return (
    <Link
      to={url}
      className="px2 mt-1 block rounded py-1 font-semibold text-white hover:bg-slate-800 md:ml-2"
    >
      {children}
    </Link>
  );
};

export default NavBarLink;
