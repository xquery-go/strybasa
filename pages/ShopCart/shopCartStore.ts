import {create} from "zustand";
import {IShopCartProduct} from "@/models/IShopCartProduct";
import axios from "axios";
import {mountStoreDevtool} from "simple-zustand-devtools";
import {IProduct} from "@/models/IProduct";

interface ShopCartStore {
    getShopCart: (token: string) => Promise<IShopCartProduct[] | null>,
    getShopCartAmount: (token: string) => Promise<number | null>,
    addShopCartProduct: (token: string, product: IProduct) => Promise<void>,
    changeQuantityShopCartProduct: (token: string, product: IProduct, quantity: number) => Promise<void>,
    getShopCartProductQuantity: (token: string, product_id: string | number) => Promise<number>
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
            if(token) {
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
    },
    changeQuantityShopCartProduct: async (token: string, product: IProduct, quantity: number) => {
        try {
            const data = axios({
                method: 'post',
                url: 'http://127.0.0.1/api/cart/',
                data: {
                    "product": product.product_id,
                    "amount": quantity,
                },
                headers: {
                    Authorization: `Token ${token}`
                }
            })
        } catch (error) {
            console.error(`Ошибка при изменении кол-ва товара - ${product.product_id}`, error);
        }
    },
    getShopCartProductQuantity: async (token: string, product_id: number | string) => {
        try {
            const response = await axios({
                method: 'get',
                url: `http://127.0.0.1/api/cart/${product_id}/`,
                headers: {
                    Authorization: `Token ${token}`
                },
            }).catch(() => {
                return {data: 0};
            })
            const data = response.data;
            if(data && data.amount) return data.amount;
            else {
                console.error(`Ошибка при получении товара из ккорзины - ${product_id}`);
                return 0;
            }
        } catch (error) {
            console.error(`Ошибка при получении товара из ккорзины - ${product_id}`, error);
            return 0;
        }
    }
}));
mountStoreDevtool('ShopCartStore', useShopCartStore);