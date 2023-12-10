import { create } from 'zustand';
import {ISignUpData, useUser} from "@/hooks/useUser";
import {devtools} from "zustand/middleware";
import { mountStoreDevtool } from 'simple-zustand-devtools';

interface Authorize {
    authorize: boolean,
    authorizeError: string,
    curUser: IUser | null,
    signUpData: ISignUpData | undefined,
    setSignUpData: (data: ISignUpData) => void
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
        authorizeError: '',
        curUser: null,
        signUpData: undefined,
        setSignUpData: (data: ISignUpData) => {
            console.log(`BREAKPOINT FROM STORE`, data)
            set((state) => ({
                ...state,
                signUpData: data,
            }))
        }
    })
);
mountStoreDevtool('Store', useAuthorizeStore);