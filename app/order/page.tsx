'use client';
import {useUserStore} from "@/app/userStore";
import {OrderingPage} from "@/pages/OrderingPage";

const OrderPageWrapper = () => {
    const {token} = useUserStore();
    return (
        <OrderingPage token={token}/>
    )
}

export default OrderPageWrapper