import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, X  } from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h2>PREDICTBYTE</h2>
                    <button className="close-sidebar" onClick={toggleSidebar}>
                        <X size={24} />
                    </button>
                </div>

                <nav className="sidebar-nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} onClick={() => window.innerWidth <= 768 && toggleSidebar()}>
                                <LayoutDashboard size={20} className="nav-icon" />
                                <span>Dashboard</span>
                            </NavLink>
                        </li>


                    </ul>
                </nav>

                <div className="sidebar-footer">
                    <p>© 2026 PREDICTBYTE</p>
                </div>
            </div>
            {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
        </>
    );
};

export default Sidebar;
