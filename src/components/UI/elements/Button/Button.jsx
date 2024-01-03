import styles from "./Button.module.scss"


function Button({children, callback}) {
    return ( 
        <button onClick={callback} className={styles.btn}>
            {children}
        </button>
     );
}

export default Button;