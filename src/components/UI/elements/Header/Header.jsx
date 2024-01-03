import React from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search/Search";
import styles from "./Header.module.scss"
import Profile from "./Profile";

function Header() {
    return ( 
        <div className={styles.header}>
            <div>
                <NavLink to="/" className="link">
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" 
                        width="112"
                        height="35"
                        alt="netflix logo">
                        
                    </img>
                </NavLink>
                <Search/>
            </div>
            <Profile/>
        </div>
     );
}

export default Header;