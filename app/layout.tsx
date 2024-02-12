'use client';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import { useUserStore } from '@/app/userStore';
import { alumniSans } from '@/config/fonts/fonts';
import '@/config/reset.css';
import './globals.css';
import styles from './layout.module.scss';
import React, { useEffect, useState } from 'react';
import useShopCartStore from "@/app/shopCartStore";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const { checkUser } = useUserStore();
    const { getShopCart } = useShopCartStore();
    const CheckFunc = () => {
        checkUser().then(
            res => getShopCart(res)
        );
    }
    useEffect(() => {
        setInterval(() => {
            CheckFunc()
        }, 2000)
    }, []);

    return (
        <html lang="en">
        <head>
            <link rel="icon" type="image/x-icon" href="/img/favicon.png" />
        </head>
        <body className={`${alumniSans.className} ${styles.layout}`}>
            <Toaster />
            {children}
        </body>
        </html>
    );
}
