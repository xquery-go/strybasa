'use client';
import React, {useEffect} from 'react';
import {useProfileStore} from "@/pages/ProfilePage/ProfileStore";
import styles from './OrdersPage.module.scss'
import {alumniSans, roboto} from "@/config/fonts/fonts";
import {IUser} from "@/models/IUser";
import {IShopCartProduct} from "@/models/IShopCartProduct";
import {IOrder} from "@/models/IOrder";
import {useUserStore} from "@/app/userStore";
import {Order} from "@/components/Order";
import {queryTypes, useQueryStates} from "next-usequerystate";



export const ProfilePage = () => {
    const { token } = useUserStore()
    const { setCurTab, getOrders, orders, getStatuses, statuses } = useProfileStore()
    const [query, setQuery] = useQueryStates({
        statusFilter: queryTypes.string
    });
    useEffect(() => {
        setCurTab("orders")
    }, [])
    useEffect(() => {
        const interval =setInterval(() => {
            getStatuses(token)
            getOrders(token, query.statusFilter)
        }, 1000);
        return () => clearInterval(interval);
    })
    return (
        <div>
            <h1 className={`${styles.name} ${roboto.className}`}>Заказы</h1>
            <select
                className={`${styles.select} ${alumniSans.className}`}
                onChange={(e) => setQuery({ statusFilter: String(e.target.value) })} >
                { statuses.map((item, ind) => {
                    return <option key={ind} value={item} className={styles.option}>{item}</option>
                }) }
            </select>
            <div className={styles.orders}>
                {orders.map(order => {
                    if(query.statusFilter || query.statusFilter != 'Все' || order.status == query.statusFilter)
                        return <Order order={order} key={order.id}/>
                })}
            </div>
        </div>
    )
}