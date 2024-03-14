'use client'
import { roboto } from '@/config/fonts/fonts'
import axios from 'axios'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import styles from './PasswordChangeForm.module.scss'

export const PasswordChangeForm = () => {
	const router = useRouter()
	const formik = useFormik({
		initialValues: {
			phone_number: '',
			new_password: '',
		},
		onSubmit: async values => {
			for (let i of ['phone_number', 'new_password']) {
				let el = document.getElementById(i)
				if (el) {
					el.style.display = 'none'
				}
			}
			let data = await axios({
				method: 'post',
				url: 'http://0.0.0.0:8000/api/users/change_password/',
				data: values,
			}).catch(function (error) {
				return error.response
			})
			data = data.data

			if ('errors' in data) {
				const errors = data.errors
				for (let key in errors) {
					if (errors.hasOwnProperty(key)) {
						let el = document.getElementById(key)
						if (el) {
							el.innerText = '* ' + errors[key][0]
							el.style.display = 'block'
						}
					}
				}
			} else {
				await router.push(`/verification/changePassword`)
			}
		},
	})
	return (
		<div className={styles.wrapper}>
			<form className={styles.form} onSubmit={formik.handleSubmit}>
				<h2 className={`${styles.title} ${roboto.className}`}>
					Изменение пароля
				</h2>
				<div className={styles.field}>
					<label htmlFor='phone_number'>Номер телефона</label>
					<input
						className={styles.input}
						name={'phone_number'}
						value={formik.values.phone_number}
						onChange={formik.handleChange}
						placeholder={'Номер телефона'}
					/>
					<p id='phone_number' className={styles.error}>
						Error
					</p>
				</div>
				<div className={styles.field}>
					<label htmlFor='new_password'>Новый пароль</label>
					<input
						className={styles.input}
						type='password'
						name='new_password'
						value={formik.values.new_password}
						onChange={formik.handleChange}
						placeholder={'Введите новый пароль'}
					/>
					<p id='new_password' className={styles.error}>
						Error
					</p>
				</div>
				<div className={styles.bottomPart}>
					<button className={styles.btn} type='submit'>
						Изменить пароль
					</button>
				</div>
			</form>
		</div>
	)
}
