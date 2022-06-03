import React, { useState } from 'react';
import logo from './../../images/logo.png';
import './Sidebar.css';
import { SidebarData } from '../../Data/Data';
import {UilSignOutAlt} from '@iconscout/react-unicons';
const Sidebar = () => {

    const [selected, setSelected] = useState(0);
    

    return (
        <div className="Sidebar">
            <div className='logo'>
                <img src={logo} alt="" />
                <span>Sh<span>o</span>p</span>
            </div>

            {/* menu  */}
            <div className="menu">
                {
                    SidebarData.map((item,index)=>{
                        return(
                            <div className="menuItem">
                                <item.icon/>
                                <span>
                                    {item.heading}
                                </span>
                            </div>
                        )
                    })
                }
                <div className="menuItem">
                        <UilSignOutAlt/>
                    </div>
            </div>
        </div>
    );
};

export default Sidebar;