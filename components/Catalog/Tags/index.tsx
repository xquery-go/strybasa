'use client';
import React, {useEffect, useState} from 'react';
import styles from './Tags.module.scss'
import {ITag} from "@/models/ITag";
import { queryTypes, useQueryStates } from 'next-usequerystate';
import {useTags} from "@/hooks/useTags";

export const Tags = () => {

    const {data: tags} = useTags()
    const [query, setQuery] = useQueryStates({
        categoryFilter: queryTypes.string.withDefault(''),
        tagFilter: queryTypes.string.withDefault('Tag1')
    });
    const [activeTag, setActiveTag] = useState<string | null>(query.tagFilter)
    return (
        <div className={styles.tags}>
            { tags ? tags.map((item, ind) => {
                const className = (item.slug != activeTag ? `${styles.tag}` : `${styles.tag} ${styles.tag_active}`);
                return (
                    <p
                        key={ind}
                        className={className}
                        onClick={() => {
                            setQuery({tagFilter: item.slug})
                            setActiveTag(item.slug)
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