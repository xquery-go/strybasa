import {create} from "zustand";
import {IShopCartProduct} from "@/models/IShopCart";
import axios from "axios";
import {mountStoreDevtool} from "simple-zustand-devtools";
import {IProduct} from "@/models/IProduct";

interface ShopCartStore {
    getShopCart: (token: string) => Promise<IShopCartProduct[] | null>,
    getShopCartAmount: (token: string) => Promise<number | null>,
    addShopCartProduct: (token: string, product: IProduct) => Promise<void>,
}

export const useShopCartStore = create<ShopCartStore>((set) => ({
    getShopCart: async (token: string) => {
        try {
            const response = await axios.get<any>("http://127.0.0.1/api/cart/", {
                timeout: 2000,
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            return response.data as IShopCartProduct[];
        } catch (error) {
            console.error("Ошибка при получении корзины", error);
            return null;
        }
    },
    getShopCartAmount: async (token: string) => {
        try {
            const response = await axios.get<any>("http://127.0.0.1/api/cart/", {
                timeout: 2000,
                headers: {
                    Authorization: `Token ${token}`,
                },
            });
            const data = response.data
            if(data && data.length && data[0].user_total_price)
                return data[0].user_total_price as number;
            else {
                console.error("Ошибка при получении стоимости корзины 1", data);
                return 0;
            }
        } catch (error) {
            console.error("Ошибка при получении стоимости корзины 2", error);
            return 0;
        }
    },
    addShopCartProduct: async (token: string, product: IProduct) => {
        try {
            const data = axios({
                method: 'post',
                url: 'http://127.0.0.1/api/cart/',
                data: {
                    "product": product.product_id,
                    "amount": 1,
                },
                headers: {
                    Authorization: `Token ${token}`
                }
            })
        } catch (error) {
            console.error(`Ошибка при добавлении продукта - ${product.product_id}`, error);
        }
    }
}));
mountStoreDevtool('ShopCartStore', useShopCartStore);