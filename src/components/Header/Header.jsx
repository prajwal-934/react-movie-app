import React from 'react';
import user from '../../images/avatar.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className="logo">Movie App</div>
            <div className="userImg">
                <img src={user} alt="" />
            </div>
        </div>
    );
};

export default Header;