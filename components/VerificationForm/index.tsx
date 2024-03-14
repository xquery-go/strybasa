'use client'
import { useAuthorizeStore } from '@/app/authorizeStore'
import { roboto } from '@/config/fonts/fonts'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './VerificationForm.module.scss'

export const VerificationForm = ({
	typeVerification,
}: {
	typeVerification: string
}) => {
	const [myurl, setUrl] = useState<string>('')
	const [pushUrl, setPushUrl] = useState<string>('')

	useEffect(() => {
		// console.log(typeVerification)
		switch (typeVerification) {
			case 'changePassword':
				setUrl('http://stroi-basa.ru/api/users/confirm_change_password/')
				setPushUrl('/profile')
				break
			case 'registration':
				setUrl('http://stroi-basa.ru/api/users/confirm_active_user/')
				setPushUrl('/login')
				break
		}
	}, [typeVerification])
	useEffect(() => {
		// console.log(`myurl: ${myurl}, pushUrl: ${pushUrl}`)
	}, [myurl, pushUrl])
	const router = useRouter()
	const [code, setCode] = useState<string>('')
	const { signUpData } = useAuthorizeStore()
	const handleSubmit = async () => {
		let el = document.getElementById('code')
		if (el) {
			el.style.display = 'none'
		}
		let data = await axios({
			method: 'post',
			url: myurl,
			data: {
				phone_number: signUpData?.phone_number,
				redis_key: code,
			},
		}).catch(response => {
			let el = document.getElementById('code')
			if (el) {
				el.innerText = '* Код неверный'
				el.style.display = 'block'
			}
			return response.response.data
		})
		let el1 = document.getElementById('right_code')
		if (el1) {
			el1.style.display = 'block'
		}
		router.push(pushUrl)
	}

	return (
		<div className={styles.wrapper}>
			<form className={styles.form}>
				<h2 className={`${styles.title} ${roboto.className}`}>Верификация</h2>
				<div className={styles.field}>
					<label htmlFor='code'>Код верификации</label>
					<input
						className={styles.input}
						value={code}
						onChange={e => setCode(e.target.value)}
						type='text'
						name='code'
						placeholder={'Код верификации'}
					/>
					<p className={styles.error} id='code'></p>
					<p
						className={`${styles.error} ${styles.error_right}`}
						id={'right_code'}
					>
						Успешно!
					</p>
				</div>
				<div className={styles.bottomPart}>
					<p className={styles.btn} onClick={handleSubmit}>
						Подтвердить
					</p>
				</div>
			</form>
		</div>
	)
}
