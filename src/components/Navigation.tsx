import React from 'react';
import {Link} from "react-router-dom";

const Navigation: React.FC = () => {
    return (
        <nav className="flex justify-between px-5 h-[50px] bg-gray-200 items-center shadow-md">
            <Link to="/auth">Auth</Link>
        </nav>
    );
};

export default Navigation;
