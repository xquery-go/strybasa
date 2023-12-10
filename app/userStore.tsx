import { create } from 'zustand';
import {ISignUpData, useUser} from "@/hooks/useUser";
import { mountStoreDevtool } from 'simple-zustand-devtools';
import Cookies from "universal-cookie";
import {cookies} from "next/headers";

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
export interface IUser {
    user_id: number,
    username: string,
    date_joined: string,
    errors?: Object | null
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
        checkUser: () => {
            const cookies = new Cookies(null, { path: '/' })
            set((state) => ({
                ...state,
                token: cookies.get('token'),
                user_id: cookies.get('user_id')
            }))
        }
    })
);
mountStoreDevtool('Store', useAuthorizeStore);