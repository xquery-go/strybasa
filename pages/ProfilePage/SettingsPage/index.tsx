'use client'
import useProfileStore from '@/app/ProfileStore'
import { useUserStore } from '@/app/userStore'
import { roboto } from '@/config/fonts/fonts'
import { LogOut, PenLine } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import styles from './SettingsPage.module.scss'

const SettingsPage = () => {
	const { setCurTab } = useProfileStore()
	const { quitAccount } = useUserStore()
	const router = useRouter()
	useEffect(() => {
		setCurTab('settings')
	}, [setCurTab])
	return (
		<div>
			<title>Настройки | Стройбаза Тиски</title>
			<h1 className={`${styles.name} ${roboto.className}`}>
				Настройки аккаунта
			</h1>
			<div className={styles.btns}>
				<button
					className={styles.link}
					onClick={() => {
						quitAccount()
						router.push('/')
					}}
				>
					<span className={styles.btn_text}>Выйти из аккаунта</span>
					<LogOut color={'#FFFFFF'} width={20} height={20} />
				</button>
				<button
					className={`${styles.link} ${styles.change_btn}`}
					onClick={() => {
						router.push('/change_password')
					}}
				>
					<span className={styles.btn_text}>Изменить пароль</span>
					<PenLine color={'#FFFFFF'} width={20} height={20} />
				</button>
			</div>
		</div>
	)
}

export default SettingsPage
