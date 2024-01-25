import React from 'react';
import styles from './ServicesPage.module.scss'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import ServicesData from "@/data/ServicesData";
import {IService} from "@/models/IService";
import {Service} from "@/components/Service";
import {roboto} from "@/config/fonts/fonts";

const ServicesPage = () => {
    return (
        <div className={styles.wrapper}>
            <title>Наши услуги | Стройбаза Тиски</title>
            <Header/>
            <div className={styles.content}>
                <h1 className={`${styles.name} ${roboto.className}`}>Наши услуги</h1>
                <div className={styles.services}>
                    {ServicesData.map((item: IService) => {
                        return <Service item={item} key={item.id}/>
                    })}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ServicesPage;