'use client';
import {ShopCart} from "@/pages/ShopCart";
import {useUserStore} from "@/app/userStore";

const ShopCartPage = () => {
    const {token} = useUserStore();
    return (
        <ShopCart token={token as string}/>
    )
}

export default ShopCartPage