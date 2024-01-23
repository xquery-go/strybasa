import React, {useEffect} from 'react';
import {Header} from "@/components/Header";
import styles from './HomePage.module.scss'
import {ProductGrid} from "@/components/ProductGrid";
import {Catalog} from "@/components/Catalog";
import {SpecialProducts} from "@/components/SpecialProducts";
import {Footer} from "@/components/Footer";

export const HomePage = () => {
    return (
        <div className={styles.wrapper}>
            <head>
                <title>Главная | Стройбаза Тиски</title>
            </head>
            <Header />
            <section className={styles.section}><ProductGrid /></section>
            <section className={styles.section}><SpecialProducts /></section>
            <section className={styles.section}><Catalog /></section>
            <Footer />
        </div>
    );
};