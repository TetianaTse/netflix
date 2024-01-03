import { NavLink } from "react-router-dom";
import styles from "./BottomNavigation.module.scss"

function BottomNavigation({ isActiveTab, setIsActiveTab}) {
    
    const tabData = [
        {
            id: "tab_1",
            name: "Overview",
            address: "/"
        },
        {
            id: "tab_2",
            name: "Episodes",
            address: "/episodes"
        },
        {
            id: "tab_3",
            name: "Details",
            address: "/details"
        },
    ]
    
    return ( 
    <nav className={styles.nav}>
        {tabData.map(tab => (
            <button 
                key={tab.id} 
                onClick={() => setIsActiveTab(tab.id)} 
                className={isActiveTab === tab.id ? styles.activeTab: "" }
            >
                <NavLink to={`${tab.address}`}>{tab.name}</NavLink>
            </button>
))}
    </nav> 
    );
}

export default BottomNavigation;