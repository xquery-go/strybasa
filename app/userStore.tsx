import { create } from 'zustand';
import {ISignUpData, useUser} from "@/hooks/useUser";
import {devtools} from "zustand/middleware";
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface Authorize {
    authorize: boolean,
    authorizeError: string,
    curUser: IUser | null,
    signUpData: ISignUpData | undefined,
    token: string,
    setSignUpData: (data: ISignUpData) => void,
    setToken: (data: string) => void
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
        setToken: (data: string) => {
            set((state) => ({
                ...state,
                token: data,
            }))
        }
    })
);
mountStoreDevtool('Store', useAuthorizeStore);