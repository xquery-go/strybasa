import {create} from "zustand";
import {IOrder} from "@/models/IOrder";
import axios from "axios";

interface ProfileStore {
    orders: IOrder[],
    statuses: string[],
    curTab: string,
    setCurTab: (value: string) => void,
    getOrders: (token: string, filter: string | null) => Promise<IOrder[]>,
    getStatuses: (token: string) => Promise<string[]>
}

const useProfileStore = create<ProfileStore>(
    (set) => ({
        statuses: ['Все'],
        orders: [],
        curTab: 'orders',
        setCurTab: (value: string) => {
            set((state) => ({
                ...state,
                curTab: value
            }))
        },
        getOrders: async (token: string, filter: string | null) => {
            if(token) {
                const data = await axios({
                    method: 'get',
                    url: 'http://0.0.0.0:8000/api/orders/',
                    headers: {
                        Authorization: `Token ${token}`
                    },
                })
                let processedData = (data.data as IOrder[]);
                if(!filter || filter != 'Все')
                    processedData.filter((item: IOrder) => item.status == filter)
                set((state) => ({
                    ...state,
                    orders: processedData,
                }))
                return (processedData ? processedData : [])
            }
            return []
        },
        getStatuses: async (token: string) => {
            if(token) {
                const data = await axios({
                    method: 'get',
                    url: 'http://0.0.0.0:8000/api/orders/order_status/',
                    headers: {
                        Authorization: `Token ${token}`
                    },
                })
                set((state) => ({
                    ...state,
                    statuses: ['Все', ...data.data.order_status],
                }))
                return (data.data.order_status ? ['Все', ...data.data.order_status] : ['Все'])
            }
            return ['Все']
        }
    })
)

export default useProfileStore;