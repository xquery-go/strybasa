'use client';
import React, {useState} from 'react';
import styles from './Categories.module.scss'
import {ICategory} from "@/models/ICategory";
import {CategoriesData} from "@/data/CategoriesData";

export const Categories = () => {
    const categories = CategoriesData;
    const [activeCategory, setActiveCategory] = useState<ICategory>(categories[0])
    return (
        <select className={styles.select}>
            <option value="" className={`${styles.option} ${styles.option_name}`}>Категирия</option>
            { categories.map((item, ind) => {
                return (
                    <option
                        key={ind}
                        value={ item.slug }
                        className={styles.option}
                        onClick={() => setActiveCategory(item)}
                    >
                        { item.name }
                    </option>
                )
            }) }
        </select>
    )
}