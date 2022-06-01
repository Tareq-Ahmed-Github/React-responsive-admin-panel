import React from 'react';
import logo from './../../images/logo.png';
import './Sidebar.css';
const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className='logo'>
                <img src={logo} alt="" />
                <span>Sh<span>o</span>p</span>
            </div>
        </div>
    );
};

export default Sidebar;