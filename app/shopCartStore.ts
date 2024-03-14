import {create} from "zustand";
import {IShopCartProduct} from "@/models/IShopCartProduct";
import axios from "axios";
import {mountStoreDevtool} from "simple-zustand-devtools";
import {IProduct} from "@/models/IProduct";
import method from "async-validator/dist-types/validator/method";

interface ShopCartStore {
    shopCartAmount: number,
    shopCart: null | IShopCartProduct[],
    getShopCart: (token: string) => Promise<IShopCartProduct[] | null>,
    getShopCartAmount: (token: string) => Promise<number | null>,
    addShopCartProduct: (token: string, product: IProduct) => Promise<void>,
    changeQuantityShopCartProduct: (token: string, product: IProduct, quantity: number) => Promise<void>,
    getShopCartProductQuantity: (token: string, product_id: string | number) => Promise<number>
}

const useShopCartStore = create<ShopCartStore>((set) => ({
    shopCart: null,
    shopCartAmount: 0,
    getShopCart: async (token: string) => {
        try {
            const response = await axios({
                method: 'get',
                url: `http://stroi-basa.ru/api/cart/`,
                headers: {
                    Authorization: `Token ${token}`,
                },
            }).catch();
            set((state) => ({
                ...state,
                shopCart: response.data as IShopCartProduct[]
            }))
            try {
                set((state) => ({
                    ...state,
                    shopCartAmount: response.data[0].user_total_price as number,
                }))
            } catch {}
            return response.data as IShopCartProduct[];
        } catch (error) {
            console.error("Ошибка при получении корзины", error);
            return null;
        }
    },
    getShopCartAmount: async (token: string) => {
        try {
            if(token) {
                const response = await axios({
                    method: 'get',
                    url: "http://stroi-basa.ru/api/cart/",
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                }).catch();
                const data = response.data
                if(data && data.length && data[0].user_total_price) {
                    set((state) => ({
                        ...state,
                        shopCartAmount: data[0].user_total_price as number,
                    }))
                    return data[0].user_total_price as number;
                }
                else {
                    // console.error("Ошибка при получении стоимости корзины 1", data);
                    return 0;
                }
            } else {
                return 0;
            }
        } catch (error) {
            // console.error("Ошибка при получении стоимости корзины 2", error);
            return 0;
        }
    },
    addShopCartProduct: async (token: string, product: IProduct) => {
        try {
            const data = await axios({
                method: 'post',
                url: 'http://stroi-basa.ru/api/cart/',
                data: {
                    "product": product.product_id,
                    "amount": 1,
                },
                headers: {
                    Authorization: `Token ${token}`
                }
            }).catch()
        } catch (error) {}
    },
    changeQuantityShopCartProduct: async (token: string, product: IProduct, quantity: number) => {
        try {
            const data = await axios({
                method: 'post',
                url: 'http://stroi-basa.ru/api/cart/',
                data: {
                    "product": product.product_id,
                    "amount": quantity,
                },
                headers: {
                    Authorization: `Token ${token}`
                }
            }).catch()
        } catch (error) {}
    },
    getShopCartProductQuantity: async (token: string, product_id: number | string) => {
        try {
            const response = await axios({
                method: 'get',
                url: `http://stroi-basa.ru/api/cart/${product_id}/`,
                headers: {
                    Authorization: `Token ${token}`
                },
            }).catch(() => {
                return {data: 0};
            })
            const data = response.data;
            if(data && data.amount) return data.amount;
            else {
                return 0;
            }
        } catch (error) {
            return 0;
        }
    },
}));
export default useShopCartStore;

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Store', useShopCartStore);
}