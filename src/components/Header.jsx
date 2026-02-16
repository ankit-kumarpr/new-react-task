import React from 'react';
import { Menu, Search, User } from 'lucide-react';
import './Header.css';

const Header = ({ toggleSidebar }) => {
    return (
        <header className="header">
            <div className="header-left">
                <button className="menu-btn" onClick={toggleSidebar}>
                    <Menu size={24} />
                </button>
                <div className="search-bar">
                    <Search size={20} className="search-icon" />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>

            <div className="header-right">
                <div className="user-profile">
                    <div className="avatar">
                        <User size={20} />
                    </div>
                    <span className="username">Admin User</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
