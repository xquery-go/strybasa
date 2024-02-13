'use client'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { RegForm } from '@/components/RegForm'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Cookies from 'universal-cookie'
import styles from './RegistrationPage.module.scss'

const RegistrationPage = () => {
	const cookies = new Cookies(null, { path: '/' })
	const token = cookies.get('token'),
		user_id = cookies.get('user_id')
	const router = useRouter()
	useEffect(() => {
		if (
			user_id != -1 &&
			token != '' &&
			token &&
			user_id &&
			window.location.pathname == '/login'
		)
			router.push('/')
	})
	return (
		<div>
			<title>Регистрация | Стройбаза Тиски</title>
			<div className={styles.wrapper}>
				<Header />
				<div className={styles.content}>
					<RegForm />
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default RegistrationPage
