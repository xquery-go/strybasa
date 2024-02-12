'use client';
import React, {useEffect} from 'react';
import {Header} from "@/components/Header";
import styles from './HomePage.module.scss'
import {ProductGrid} from "@/components/ProductGrid";
import {Catalog} from "@/components/Catalog";
import {SpecialProducts} from "@/components/SpecialProducts";
import {Footer} from "@/components/Footer";
import Head from "next/head";

const HomePage = () => {
    return (
        <div className={styles.wrapper} >
            <title>Главная | Стройбаза Тиски</title>
            <Header />
            <section className={styles.section}><ProductGrid /></section>
            <section className={styles.section}><SpecialProducts /></section>
            <section className={styles.section}><Catalog /></section>
            <Footer />
        </div>
    );
};

export default HomePage;