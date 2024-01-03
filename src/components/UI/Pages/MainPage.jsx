import React, { useState } from "react";
import Header from "../elements/Header/Header";
import Information from "../elements/Information/Information";
import Sidebar from "../elements/Sidebar/Sidebar";
import BottomNavigation from "../elements/BottomNavigation/BottomNavigation";
import { data } from "../../../data";
import styles from './MainPage.module.scss';




function MainPage() {

    const [isSidebarShow, setIsSidebarShow] = useState(false);
    const [isActiveTab, setIsActiveTab] = useState(false);


    return ( 
        <div>
            <Header/>
            <div className={styles.wrapper}>
                <Sidebar
                isSidebarShow={isSidebarShow}
                setIsSidebarShow={setIsSidebarShow}
                />
                <div 
                className={styles.main}
                style={{backgroundImage: `url(${data[0].mainImg})`, width: isSidebarShow ? '85%' :"95%"}}>
                    <Information movie={data[0]} />
                    <BottomNavigation
                    isActiveTab={isActiveTab}
                    setIsActiveTab={setIsActiveTab}
                    />
                    
                </div>
            </div>
        </div>
     );
}

export default MainPage;