'use client';
import React, {useEffect, useState} from 'react';
import styles from './Categories.module.scss'
import {ICategory} from "@/models/ICategory";
import { queryTypes, useQueryStates } from 'next-usequerystate';

export const Categories = () => {
    const [categories, setCategories] = useState<null | ICategory[]>(null);
    useEffect(() => {
        fetch('http://127.0.0.1/api/categories/?format=json')
            .then((res) => res.json())
            .then((data) => {
                setCategories(data as ICategory[])
                // console.log(`BREAKPOINT FROM CATEGORIES`, data)
            }).catch(() => {})
    }, [])
    const [query, setQuery] = useQueryStates({
        categoryFilter: queryTypes.integer,
        tagFilter: queryTypes.integer
    });
    return (
        <div>
            { categories ?
                <select name="" id="" value={String(query.categoryFilter)} onChange={(e) => setQuery({ categoryFilter: Number(e.target.value) })} className={styles.select}>
                    <option value="" className={`${styles.option} ${styles.option_name}`}>Все категории</option>
                    { categories.map((item: ICategory, ind) => {
                        return (
                            <option
                                key={ind}
                                value={ item.id }
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