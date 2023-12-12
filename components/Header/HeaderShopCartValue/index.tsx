'use client';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useShopCartStore} from "@/pages/ShopCart/shopCartStore";

export const HeaderShopCartValue = ({token}: {token: string}) => {
    const [value, setValue] = useState<number | null>(0)
    const {getShopCartAmount} = useShopCartStore()
    useEffect(() => {
        if(token != '') {
            const fetchData = async () => {
                const data = await getShopCartAmount(token);
                setValue(data);
            };
            fetchData();
        }
    })
    return (
        <>{value ? value : 0}</>
    )
}