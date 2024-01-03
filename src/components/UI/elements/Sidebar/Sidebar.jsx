import styles from "./Sidebar.module.scss"
import { NavLink } from 'react-router-dom';

function Sidebar({isSidebarShow, setIsSidebarShow}) {
    const menu = [
        "Popular", "TV Shows", "Films", "My List"
    ]
    return ( 
        <div className={styles.sidebar} style={{width: isSidebarShow ? '15%' :"5%"}}>
            <button onClick={() => setIsSidebarShow(!isSidebarShow)}>
                <i className={`bx bx-${isSidebarShow ? "x": "menu"}`}></i>
            </button>
            <ul className={isSidebarShow ? styles.show : ""}>
                {menu.map(item => (
                    <li key={item}><NavLink>{item}</NavLink></li>
                ))}
            </ul>
        </div>
     );
}

export default Sidebar;