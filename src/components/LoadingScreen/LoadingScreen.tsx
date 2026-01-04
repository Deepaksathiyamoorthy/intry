import React from 'react';
import styles from './LoadingScreen.module.scss';
import logo from '../../assets/Insyntrix-logo-1.svg';

const LoadingScreen: React.FC = () => {
    return (
        <div className={styles.loadingScreen}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="Loading..." />
            </div>
            <div className={styles.loadingText}>Loading...</div>
        </div>
    );
};

export default LoadingScreen;
