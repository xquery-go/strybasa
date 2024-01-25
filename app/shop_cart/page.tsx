'use client';
import ShopCart from "@/pages/ShopCart";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import toast from "react-hot-toast";
import Cookies from "universal-cookie";

const ShopCartPage = () => {
    const cookies = new Cookies(null, { path: '/' })
    const token = cookies.get('token'), user_id = cookies.get('user_id');
    const router = useRouter()
    useEffect(() => {
        if(user_id == -1 || token == '' || !user_id || !token) {
            router.push('/login')
            toast("В начале войдите в аккаунт", {
                position: "bottom-right",
                icon: '!'
            })
        }
    }, [token, user_id])
    return (
        <ShopCart token={token as string}/>
    )
}

export default ShopCartPage