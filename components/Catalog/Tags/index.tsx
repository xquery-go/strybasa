'use client';
import React, {useState} from 'react';
import styles from './Tags.module.scss'
import {ITag} from "@/models/ITag";
import {TagsData} from "@/data/TagsData";
import {act} from "react-dom/test-utils";

export const Tags = () => {
    const tags = TagsData;
    const [activeTag, setActiveTag] = useState<ITag>(tags[0])
    return (
        <div className={styles.tags}>
            { tags.map((item, ind) => {
                const className = (item.slug == activeTag.slug ? `${styles.tag}` : `${styles.tag} ${styles.tag_active}`);
                return (
                    <p
                        key={ind}
                        className={className}
                        onClick={() => setActiveTag(item)}
                    >
                        { item.name }
                    </p>
                )
            }) }
        </div>
    )
}