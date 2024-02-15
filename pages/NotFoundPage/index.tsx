import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { AlertTriangle } from 'lucide-react'
import styles from './NotFoundPage.module.scss'

const NotFound = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.content}>
				<div className={styles.error_text}>
					<h1>Страница не найдена</h1>
					<p>Страница устарела, была удалена или не существовала вовсе</p>
				</div>
				<AlertTriangle width={100} height={100} color='#EEB200' />
			</div>
			<Footer />
		</div>
	)
}

export default NotFound
