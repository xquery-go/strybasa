import {create} from "zustand";
import {IUser} from "@/models/IUser";
import Cookies from "universal-cookie";
import axios from "axios";

interface UserStore {
    token: string,
    user_id: number,
    curUser: IUser | null,
    setUser: (token: string, user_id: number) => void,
    checkUser: () => void
}

export const useUserStore = create<UserStore>(
    (set) => ({
        token: '',
        user_id: -1,
        curUser: null,
        setUser: (token: string, user_id: number) => {
            set((state) => ({
                ...state,
                token: token,
                user_id: user_id
            }))
            const cookies = new Cookies(null, { path: '/' })
            cookies.set('token', token, { maxAge: 60 * 60 * 24 * 30 })
            cookies.set('user_id', user_id, { maxAge: 60 * 60 * 24 * 30 })
        },
        checkUser: async () => {
            const cookies = new Cookies(null, { path: '/' })
            const token = cookies.get('token'), user_id = cookies.get('user_id');
            set((state) => ({
                ...state,
                token: token,
                user_id: user_id,
            }))
            if(cookies.get('user_id') != -1) {
                let data = await axios({
                    method: 'get',
                    url: 'http://127.0.0.1/api/users/profile/',
                    headers: {
                        Authorization: `Token ${token}`,
                    }
                })
                set((state) => ({
                    ...state,
                    curUser: data.data as IUser
                }))
            }
        }
    })
)