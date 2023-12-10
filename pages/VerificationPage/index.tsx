import React from 'react';
import styles from './VerificationPage.module.scss'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {RegForm2} from "@/components/RegForm/RegForm2";

export const VerificationPage = () => {
    return (
        <div>
            <div className={styles.wrapper}>
                <Header />
                <div className={styles.content}>
                    <RegForm2 />
                </div>
                <Footer />
            </div>
        </div>
    )
}