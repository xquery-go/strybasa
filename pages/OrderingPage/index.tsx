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
            console.log("Submit", values)
        }
    })
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <h2 className={`${styles.name} ${roboto.className}`}>Оформление заказа</h2>
                <div className={styles.grid}>
                    <form className={styles.form} onSubmit={formik.handleSubmit}>
                        <div className={styles.field}>
                            <label htmlFor="signer_lastname" className={styles.label}>Фамилия</label>
                            <input
                                name="signer_lastname"
                                className={styles.input}
                                type="text"
                                placeholder={'Фамилия'}
                                onChange={formik.handleChange}
                                value={formik.values.signer_lastname}
                            />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="signer_firstname" className={styles.label}>Имя</label>
                            <input
                                name="signer_firstname"
                                className={styles.input}
                                type="text"
                                placeholder={'Имя'}
                                onChange={formik.handleChange}
                                value={formik.values.signer_firstname}
                            />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="signer_address" className={styles.label}>Адрес</label>
                            <input
                                name="signer_address"
                                className={styles.input}
                                type="text"
                                placeholder={'Адрес'}
                                onChange={formik.handleChange}
                                value={formik.values.signer_address}
                            />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="order_comment" className={styles.label}>Комментарий к заказу</label>
                            <input
                                name="order_comment"
                                className={styles.input}
                                type="text"
                                placeholder={'Комментарий к заказу'}
                                onChange={formik.handleChange}
                                value={formik.values.order_comment}
                            />
                        </div>
                        <button type={'submit'} className={styles.btn}>Оформить</button>
                    </form>
                    <div className={styles.info}>
                        <p className={`${styles.info_title} ${roboto.className}`}>Информация по оформлению</p>
                        <ul className={styles.info_list}>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in pretium magna.
                                Ut quis orci a risus mollis tempor id quis mi. Aliquam porta sem congue ligula finibus,
                                malesuada luctus sapien facilisis. Sed consequat velit vitae lectus volutpat elementum.
                                In hac habitasse platea dictumst. Vestibulum rutrum nisl erat, eu consequat lorem
                                rhoncus quis. </li>
                            <li>Donec porttitor, diam sed vulputate tincidunt, augue nunc facilisis nibh, ac luctus nisl
                                nibh ac dui. Praesent porta nisl vel sapien consequat sollicitudin. Fusce eros magna,
                                semper ut odio accumsan, rhoncus commodo nisi. Integer a rhoncus nibh, ut molestie
                                ipsum. </li>
                            <li>Sed aliquam diam blandit, rutrum nisl at, eleifend diam. Curabitur
                                vestibulum, augue in mollis dapibus, tellus sem volutpat diam, quis condimentum est
                                lectus at ligula. Ut eget dapibus sem. Proin id lobortis dolor.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}