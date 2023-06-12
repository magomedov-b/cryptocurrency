import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-nav-bg text-white">
            <span>
                <Link to="/" className="mr-2">Home</Link>
                <Link to="/favourites">Favourites</Link>
            </span>
                <Link to="/search">Search</Link>
        </nav>
    );
};

export default Navigation;