import React from 'react';
import styles from './Navbar.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
const Navbar = props => {
    return(
        <header className={styles.toolbar}>
            <nav className={styles.toolbar__navigation}>
                <div className={styles.toolbar__logo}>
                    <a href='/'><FontAwesomeIcon icon={['fab','angrycreative']} /></a>
                </div>
                <div className={styles["toolbar__navigation-items"]}>
                <ul>
                    <li><a href='features'>Features</a></li>
                    <li><a href='books'>Latest Books</a></li>
                    <li><a href='pricing'>Pricing</a></li>
                    <li><a href='login'>Login</a></li>
                </ul>
                </div>
                <div className={styles.toolbar__hamicon} onClick={props.onHamclick}>
                    <FontAwesomeIcon icon='bars' size='4x'color='white' />
                </div>
            </nav>
        
    </header>
    )
    
    

}
export default Navbar