'use client';
import {ShopCart} from "@/pages/ShopCart";
import {useUserStore} from "@/app/userStore";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import toast from "react-hot-toast";

const ShopCartPage = () => {
    const {token, curUser} = useUserStore();
    const router = useRouter()
    useEffect(() => {
        if(token == '' || curUser == null) {
            router.push('/login')
            toast("В начале войдите в аккаунт", {
                position: "bottom-right",
                icon: '!'
            })
        }
    }, [token, curUser])
    return (
        <ShopCart token={token as string}/>
    )
}

export default ShopCartPage