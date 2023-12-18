import React from 'react';
import styles from './OrderingPage.module.scss'
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {roboto} from "@/config/fonts/fonts";
import {useFormik} from "formik";

{/*    order_comment signer_firstname signer_lastname signer_address */}
export const OrderingPage = ({ token }: { token: string }) => {
    const formik = useFormik({
        initialValues: {
            signer_firstname: '',
            signer_lastname: '',
            order_comment: '',
            signer_address: '',
        },
        onSubmit: (values) => {
            console.log("Submit")
        }
    })
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <h2 className={`${styles.name} ${roboto.className}`}>Оформление заказа</h2>
                <form className={styles.form} onSubmit={formik.handleSubmit}>
                    <div className={styles.field}>
                        <label htmlFor="signer_lastname" className={styles.label}>Фамилия</label>
                        <input name="signer_lastname" className={styles.input} type="text" placeholder={'Фамилия'} />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="signer_firstname" className={styles.label}>Имя</label>
                        <input name="signer_firstname" className={styles.input} type="text" placeholder={'Имя'} />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="signer_address" className={styles.label}>Адрес</label>
                        <input name="signer_address" className={styles.input} type="text" placeholder={'Адрес'} />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="order_comment" className={styles.label}>Комментарий к заказу</label>
                        <input name="order_comment" className={styles.input} type="text" placeholder={'Комментарий к заказу'} />
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}