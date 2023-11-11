'use client';
import React, {useState} from 'react';
import styles from './Categories.module.scss'
import {ICategory} from "@/models/ICategory";
import {CategoriesData} from "@/data/CategoriesData";
import { queryTypes, useQueryStates } from 'next-usequerystate';
import Select from "react-select";

export const Categories = () => {
    const categories = CategoriesData;
    const options = categories.map(item => {
        return {
            value: item.slug,
            label: item.name,
        }
    })
    const [activeCategory, setActiveCategory] = useState<ICategory>(categories[0])
    const [query, setQuery] = useQueryStates({
        categoryFilter: queryTypes.string.withDefault(''),
        tagFilter: queryTypes.string.withDefault('Tag1')
    });
    const handleChange = (selectedOption: any) => {
        setQuery({categoryFilter: selectedOption.value});
    };
    return (
        <select name="" id="" value={query.categoryFilter} onChange={(e) => setQuery({ categoryFilter: e.target.value })} className={styles.select}>
            <option value="" className={`${styles.option} ${styles.option_name}`}>Категории</option>
            { categories.map((item, ind) => {
                return (
                    <option
                        key={ind}
                        value={ item.slug }
                        className={styles.option}
                    >
                        { item.name }
                    </option>
                )
            }) }
        </select>
    )
}