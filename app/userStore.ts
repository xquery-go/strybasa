import {create} from "zustand";
import {IUser} from "@/models/IUser";
import Cookies from "universal-cookie";
import axios from "axios";
import toast from "react-hot-toast";

interface UserStore {
    token: string,
    user_id: number,
    curUser: IUser | null,
    setUser: (token: string, user_id: number) => void,
    checkUser: () => void,
    quitAccount: () => void
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
            if(user_id != -1 && token != '' && token && user_id) {
                // console.log(`BREAKPOINT check user token: ${token}, user_id: ${user_id}`)
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
            } else if(user_id == -1 || token == '') {
                set((state) => ({
                    ...state,
                    curUser: null
                }))
            }
        },
        quitAccount: () => {
            const cookies = new Cookies(null, { path: '/' })
            set((state) => ({
                ...state,
                token: '',
                user_id: -1
            }))
            cookies.remove('token', { path: '/' })
            cookies.remove('user_id', { path: '/' })
            toast("Вы успешно вышли!", {position: 'bottom-right'})
        }
    })
)