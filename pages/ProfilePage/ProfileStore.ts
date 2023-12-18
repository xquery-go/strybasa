import {create} from "zustand";
import {IOrder} from "@/models/IOrder";
import axios from "axios";

interface ProfileStore {
    orders: IOrder[],
    statuses: string[],
    curTab: string,
    setCurTab: (value: string) => void,
    getOrders: (token: string, filter: string | null) => void,
    getStatuses: (token: string) => void
}

export const useProfileStore = create<ProfileStore>(
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
                    url: 'http://127.0.0.1/api/orders/',
                    headers: {
                        Authorization: `Token ${token}`
                    },
                })
                let processedData = (data.data as IOrder[]);
                if(filter && filter != 'Все')
                     processedData = processedData.filter((item) => item.status == filter)
                set((state) => ({
                    ...state,
                    orders: processedData,
                }))
                console.log(`BREAKPOINT getOrders`, data.data)
            }
        },
        getStatuses: async (token: string) => {
            if(token) {
                const data = await axios({
                    method: 'get',
                    url: 'http://127.0.0.1/api/orders/order_status/',
                    headers: {
                        Authorization: `Token ${token}`
                    },
                })
                set((state) => ({
                    ...state,
                    statuses: ['Все', ...data.data.order_status],
                }))
                console.log(`BREAKPOINT getStatuses`, ['Все', ...data.data.order_status])
            }
        }
    })
)