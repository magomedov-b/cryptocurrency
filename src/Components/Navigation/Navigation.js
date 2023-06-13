import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="flex justify-between items-center h-[50px] shadow-md bg-nav-bg text-blue-500 lg:px-20 ">
            <span>
                <Link to="/" className="mr-2 font-bold text-lg">Home</Link>
            </span>
            <span>
                <Link to="/favourites" className="font-bold text-lg hover:bg-blue-500 hover:text-white rounded px-2 py-2 ease-in duration-200">Favourites <i className="bi bi-search-heart"></i></Link>
                <Link to="/search" className="font-bold text-lg ml-10 hover:bg-blue-500 hover:text-white rounded px-2 py-2 ease-in duration-200">Search <i className="bi bi-search"></i></Link>
            </span>
        </nav>
    );
};

export default Navigation;