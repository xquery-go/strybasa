'use client';
import '@/config/reset.css'
import {alumniSans} from "@/config/fonts/fonts"
import './globals.css'
import styles from './layout.module.scss'
import {QueryClient, QueryClientProvider} from "react-query";
import {useUserStore} from "@/app/userStore";
import React, {useEffect} from "react";
import {Toaster} from "react-hot-toast";

// export const metadata: Metadata = {
//   title: 'Стройбаза «Тиски»',
//   description: 'Generated by create next app',
//   icons: [
//       '/img/favicon.png'
//   ]
// }

const queryClient = new QueryClient()
//ABOBA
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const {checkUser} = useUserStore()
    useEffect(() => {
        const timer = setTimeout(() => {
            checkUser()
        }, 2000);
        return () => clearTimeout(timer);
    })
  return (
    <html lang="en">
        <head>
            <link rel="icon" type="image/x-icon" href="/img/favicon.png"/>
        </head>
        <QueryClientProvider client={queryClient}>
          <body className={`${alumniSans.className} ${styles.layout}`}>
            <Toaster/>
            {children}
          </body>
        </QueryClientProvider>
    </html>
  )
}
