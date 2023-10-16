import React from 'react';
import {snowStormKraft} from "@/config/fonts/fonts";
import {Header} from "@/components/Header";
import styles from './HomePage.module.scss'

export const HomePage = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            Hello world
            <p className={snowStormKraft.className}>Second font</p>
        </div>
    );
};