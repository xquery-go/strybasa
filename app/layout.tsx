'use client';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';
import { useUserStore } from '@/app/userStore';
import { alumniSans } from '@/config/fonts/fonts';
import '@/config/reset.css';
import './globals.css';
import styles from './layout.module.scss';
import React, { useEffect, useState } from 'react';

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const { checkUser } = useUserStore();


    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            // Код, который выполнится только в режиме продакшн
            console.log('Вы находитесь в продакшн режиме.');
        } else {
            // Код, который выполнится в режиме разработки
            console.log('Вы находитесь в режиме разработки.');
        }
        const timer = setTimeout(() => {
            checkUser();
        }, 2000);
        return () => clearTimeout(timer);
    }, [checkUser]);

    return (
        <html lang="en">
        <Head>
            <link rel="icon" type="image/x-icon" href="/img/favicon.png" />
        </Head>
        <body className={`${alumniSans.className} ${styles.layout}`}>
            <Toaster />
            {children}
        </body>
        </html>
    );
}
