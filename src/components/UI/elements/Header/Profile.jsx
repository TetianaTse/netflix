import styles from "./Header.module.scss"

function Profile() {
    return ( 
        <div className={styles['profile-wrapper']}>
            <div className={styles.notifications}>
                <i className="bx bxs-bell"></i>
                <span></span>
            </div>
            <div className={styles.profile}>
                <div>
                    <img src="https://static.vecteezy.com/system/resources/previews/002/002/297/original/beautiful-woman-avatar-character-icon-free-vector.jpg" 
                         alt="avatar"
                         width="50" />
                </div>
                <i className="bx bx-caret-down"></i>
            </div>
        </div>
     );
}

export default Profile;