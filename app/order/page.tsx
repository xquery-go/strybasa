'use client';
import {useUserStore} from "@/app/userStore";
import {OrderPage} from "@/pages/OrderPage";

const OrderPageWrapper = () => {
    const {token} = useUserStore();
    return (
        <OrderPage token={token}/>
    )
}

export default OrderPage