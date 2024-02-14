import { ISignUpData } from '@/models/ISignUpData'
import { create } from 'zustand'

interface AuthorizeStore {
	signUpData: ISignUpData | undefined
	setSignUpData: (data: ISignUpData) => void
}

export const useAuthorizeStore = create<AuthorizeStore>(set => ({
	signUpData: undefined,
	setSignUpData: (data: ISignUpData) => {
		// console.log(`BREAKPOINT FROM STORE`, data)
		set(state => ({
			...state,
			signUpData: data,
		}))
	},
}))
// mountStoreDevtool('AuthorizeStore', useAuthorizeStore)
