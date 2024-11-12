import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ currentPageLink }) => {
    const regularLinkClassName = "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
    const highLightLinkClassName = "inline-flex items-center border-b-2 border-blue-500 px-1 pt-1 text-sm font-medium text-gray-900"
    return (
        
        <nav className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mr-10">
          <div className="flex h-28 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center mx-auto mr-40">
                <Link to="/">
                  <img className="h-48 w-auto" src="/assets/logo.png" alt="Voyage Logo"/>
                </Link>
              </div>
              <div className="hidden md:flex md:space-x-8 ">
                <Link to="/" className={currentPageLink === '/' ? highLightLinkClassName : regularLinkClassName}><b>Home</b></Link>
                <Link to="/destination" className={currentPageLink.includes('destination') ? highLightLinkClassName : regularLinkClassName}><b>Top Destinations</b></Link>
                <Link to="/packages" className={currentPageLink === '/packages' ? highLightLinkClassName : regularLinkClassName}><b>Tour Packages</b></Link>
                <Link to="/register" className={currentPageLink === '/register' ? highLightLinkClassName : regularLinkClassName}><b>Register</b></Link>
                <Link to="/contactus" className={currentPageLink === '/contactus' ? highLightLinkClassName : regularLinkClassName}><b>Contact Us</b></Link>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/login" target="_blank">
                  <button type="button" className="relative inline-flex items-center gap-x-1.5 rounded-md bg-blue-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Login
                  </button>
                </Link>
                
              </div>
              
            </div>
          </div>
        </div>
      
      </nav>
    
    );
}

export default Navbar;
