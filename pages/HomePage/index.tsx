import React from 'react';
import {Header} from "@/components/Header";
import styles from './HomePage.module.scss'
import {ProductGrid} from "@/components/ProductGrid";
import {Catalog} from "@/components/Catalog";
import {SpecialProducts} from "@/components/SpecialProducts";

export const HomePage = () => {
    return (
        <div>
            <Header />
            <ProductGrid />
            <Catalog />
            <SpecialProducts />
        </div>
    );
};