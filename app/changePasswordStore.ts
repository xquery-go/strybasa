import { create } from 'zustand'

interface useChangePasswordStore {
	phone_number: string
	new_password: string
	setChangeValues: ({
		phone_number,
		new_password,
	}: {
		phone_number: string
		new_password: string
	}) => void
}

export const useChangePasswordStore = create<useChangePasswordStore>(set => ({
	phone_number: '',
	new_password: '',
	setChangeValues: async ({ phone_number, new_password }) => {
		set(state => ({
			...state,
			phone_number: phone_number,
			new_password: new_password,
		}))
	},
}))
