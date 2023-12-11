import { create } from 'zustand';
import {ISignUpData} from "@/hooks/useUser";
import { mountStoreDevtool } from 'simple-zustand-devtools';
import Cookies from "universal-cookie";
import axios from "axios";
import {IUser} from "@/models/IUser";

interface Authorize {
    authorize: boolean,
    authorizeError: string,
    curUser: IUser | null,
    signUpData: ISignUpData | undefined,
    token: string,
    user_id: number,
    setSignUpData: (data: ISignUpData) => void,
    setUser: (token: string, user_id: number) => void,
    checkUser: () => void
}


export const useAuthorizeStore = create<Authorize>(
    (set) => ({
        authorize: false,
        token: '',
        user_id: -1,
        authorizeError: '',
        curUser: null,
        signUpData: undefined,

        setSignUpData: (data: ISignUpData) => {
            console.log(`BREAKPOINT FROM STORE`, data)
            set((state) => ({
                ...state,
                signUpData: data,
            }))
        },
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
                    url: `http://127.0.0.1/api/users/profile/`,
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
);
mountStoreDevtool('Store', useAuthorizeStore);