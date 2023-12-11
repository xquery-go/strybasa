'use client';
import {ShopCart} from "@/pages/ShopCart";
import {useAuthorizeStore} from "@/app/userStore";

const ShopCartPage = () => {
    const {token} = useAuthorizeStore();
    return (
        <ShopCart token={token as string}/>
    )
}

export default ShopCartPage