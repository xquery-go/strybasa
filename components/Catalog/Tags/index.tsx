'use client';
import React, {useState} from 'react';
import styles from './Tags.module.scss'
import {ITag} from "@/models/ITag";
import {TagsData} from "@/data/TagsData";
import { queryTypes, useQueryStates } from 'next-usequerystate';

export const Tags = () => {
    const tags = TagsData;
    const [activeTag, setActiveTag] = useState<ITag>(tags[0])
    const [query, setQuery] = useQueryStates({
        categoryFilter: queryTypes.string.withDefault(''),
        tagFilter: queryTypes.string.withDefault('Tag1')
    });
    return (
        <div className={styles.tags}>
            { tags.map((item, ind) => {
                const className = (item.slug != activeTag.slug ? `${styles.tag}` : `${styles.tag} ${styles.tag_active}`);
                return (
                    <p
                        key={ind}
                        className={className}
                        onClick={() => {
                            setQuery({tagFilter: item.slug})
                            setActiveTag(item)
                        }}
                    >
                        { item.name }
                    </p>
                )
            }) }
        </div>
    )
}