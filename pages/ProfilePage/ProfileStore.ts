import {create} from "zustand";

interface ProfileStore {
    curTab: string,
    setCurTab: (value: string) => void
}

export const useProfileStore = create<ProfileStore>(
    (set) => ({
        curTab: 'orders',
        setCurTab: (value: string) => {
            set((state) => ({
                ...state,
                curTab: value
            }))
        }
    })
)