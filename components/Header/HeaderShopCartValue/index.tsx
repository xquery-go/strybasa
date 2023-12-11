'use client';
import React, {useEffect, useState} from 'react';
import axios from "axios";

export const HeaderShopCartValue = ({token}: {token: string}) => {
    const [value, setValue] = useState<number | null>(0)
    useEffect(() => {
        if(token != '') {
            const timer = setTimeout(() => {
                const data = axios({
                    method: 'get',
                    url: 'http://127.0.0.1/api/cart/',
                    headers: {
                        Authorization: `Token ${token}`
                    }
                }).then(data => {
                    // console.log(`BREAKPOINT FROM SHOPCART`, data.data)
                    setValue((data.data.length ? data.data[0].user_total_price : 0))
                })
            }, 1000);
            return () => clearTimeout(timer);
        }
    })
    return (
        <>{value ? value : 0}</>
    )
}