import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { VerificationForm } from '@/components/VerificationForm'
import styles from './VerificationPage.module.scss'

const VerificationPage = ({
	typeVerification,
}: {
	typeVerification: string
}) => {
	return (
		<div>
			<title>
				Верификация | Стройбаза Тиски
			</title>
			<div className={styles.wrapper}>
				<Header />
				<div className={styles.content}>
					<VerificationForm typeVerification={typeVerification} />
				</div>
				<Footer />
			</div>
		</div>
	)
}

export default VerificationPage
