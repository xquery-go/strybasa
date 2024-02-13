import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PasswordChangeForm } from '@/components/PasswordChangeForm'
import styles from './PasswordChangePage.module.scss'

const PasswordChangePage = () => {
	return (
		<div className={styles.wrapper}>
			<title>Изменение пароля | Стройбаза Тиски</title>
			<Header />
			<div className={styles.content}>
				<PasswordChangeForm />
			</div>
			<Footer />
		</div>
	)
}

export default PasswordChangePage
