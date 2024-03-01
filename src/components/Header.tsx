import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="grid grid-cols-2 justify-between items-center px-20 py-4">
      <div className="flex items-center">
        <img src="/images/brand-logo.png" alt="Logo" className="h-8 mr-2" />
        <h1 className="text-xl leading-6 font-bold">Digital agency</h1>
      </div>
      <div className="flex items-center justify-end space-x-4">
        <HashLink smooth to="#about">
          <button className="hover:text-gray-500 rounded px-3 py-2">
            About
          </button>
        </HashLink>
        <HashLink smooth to="#service">
          <button className="hover:text-gray-500 rounded px-3 py-2">
            Services
          </button>
        </HashLink>
        <HashLink smooth to="#blog">
          <button className="hover:text-gray-500 rounded px-3 py-2">
            Blogs
          </button>
        </HashLink>
        <Link to="/queryroute">
          <button className="hover:text-gray-500 rounded px-3 py-2">
            API Route
          </button>
        </Link>
        <button className="font-sans bg-primary hover:bg-primary_hover text-white rounded-lg px-6 py-2.5 text-sm">
          Get in Touch
        </button>
      </div>
    </div>
  );
}

export default Header;
