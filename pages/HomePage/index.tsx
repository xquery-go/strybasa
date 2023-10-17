import React from 'react';
import {Header} from "@/components/Header";
import styles from './HomePage.module.scss'
import {ProductGrid} from "@/components/ProductGrid";

export const HomePage = () => {
    return (
        <div>
            <Header />
            <ProductGrid />
        </div>
    );
};