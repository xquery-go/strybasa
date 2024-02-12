'use client';
import React, {useEffect, useState} from 'react';
import styles from './Tags.module.scss'
import {ITag} from "@/models/ITag";
import { queryTypes, useQueryStates } from 'next-usequerystate';

export const Tags = () => {
    const [tags, setTags] = useState<null | ITag[]>(null);
    useEffect(() => {
        fetch('http://127.0.0.1/api/tags/?format=json')
            .then((res) => res.json())
            .then((data) => {
                setTags(data as ITag[])
            }).catch(() => {})
    }, [])

    const [query, setQuery] = useQueryStates({
        categoryFilter: queryTypes.integer,
        tagFilter: queryTypes.integer
    });
    const [activeTag, setActiveTag] = useState<number | null>(query.tagFilter)
    return (
        <div className={styles.tags}>
            { tags ? tags.map((item) => {
                const className = (item.id != activeTag ? `${styles.tag}` : `${styles.tag} ${styles.tag_active}`);
                return (
                    <p
                        key={item.id}
                        className={className}
                        onClick={() => {
                            setQuery({tagFilter: (query.tagFilter == item.id ? 0 : item.id)})
                            setActiveTag(query.tagFilter == item.id ? 0 : item.id)
                        }}
                    >
                        { item.name }
                    </p>
                )
            }) : <></>
            }
        </div>
    )
}