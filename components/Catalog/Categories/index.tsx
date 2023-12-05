'use client';
import React  from 'react';
import styles from './Categories.module.scss'
import {ICategory} from "@/models/ICategory";
import { queryTypes, useQueryStates } from 'next-usequerystate';
import {useCategories} from "@/hooks/useCategories";

export const Categories = () => {
    const {data: categories} = useCategories()

    const [query, setQuery] = useQueryStates({
        categoryFilter: queryTypes.string.withDefault(''),
        tagFilter: queryTypes.string.withDefault('Tag1')
    });
    const handleChange = (selectedOption: any) => {
        setQuery({categoryFilter: selectedOption.value});
    };
    return (
        <div>
            { categories ?
                <select name="" id="" value={query.categoryFilter} onChange={(e) => setQuery({ categoryFilter: e.target.value })} className={styles.select}>
                    <option value="" className={`${styles.option} ${styles.option_name}`}>Все категории</option>
                    { categories.map((item: ICategory, ind) => {
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
                </select> :
                <></>
            }
        </div>
    )
}