import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.scss'

export const Footer = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.links}>
					<div className={styles.column}>
						<p className={styles.column_name}>Услуги</p>
						<Link href={'/services#Delivery'}>
							<p className={styles.link}>Доставка</p>
						</Link>
						<Link href={'/services#Unloading'}>
							<p className={styles.link}>Разгрузка и подъём на этаж</p>
						</Link>
						<Link href={'/services#Sawing'}>
							<p className={styles.link}>Распил</p>
						</Link>
						<Link href={'/services#Calculation'}>
							<p className={styles.link}>Расчёт</p>
						</Link>
						<Link href={'/services#Assembly'}>
							<p className={styles.link}>Сборка и установка</p>
						</Link>
						<Link href={'/services#Storage'}>
							<p className={styles.link}>Хранение стройматериалов</p>
						</Link>
						<Link href={'/services#ExpressDelivery'}>
							<p className={styles.link}>Экспресс-доставка</p>
						</Link>
					</div>
					<div className={styles.column}>
						<p className={styles.column_name}>О компании</p>
						<Link href={'/about'}>
							<p className={styles.link}>О нас</p>
						</Link>
						<Link href={'/agreement'}>
							<p className={styles.link}>
								Согласие на обработку персональных данных
							</p>
						</Link>
						<Link href={'/policy'}>
							<p className={styles.link}>
								Политика в обработке персональных данных
							</p>
						</Link>
					</div>
					{/* <div className={styles.column}>
                        <p className={styles.column_name}>Контакты</p>
                        <Link href={'/services'}><p className={styles.link}>Центральный офис</p></Link>
                        <Link href={'/services'}><p className={styles.link}>Реквизиты</p></Link>
                    </div> */}
				</div>
				<div className={styles.block}>
					<div className={styles.timetable}>
						<p className={styles.column_name}>Часы работы</p>
						<p className={`${styles.link} ${styles.time}`}>
							Пн-Пт с 09:00 до 18:00
						</p>
						<p className={`${styles.link} ${styles.time}`}>
							Сб с 09:00 до 15:00
						</p>
					</div>
					<div className={styles.contacts}>
						<Link href={'https://vk.com/tiskikotlas'}>
							<Image
								src={'/img/VkYellow.svg'}
								width={26}
								height={26}
								alt={'Vk'}
							/>
						</Link>
						<Link href={'tel:+79116593737'}>
							<Image
								src={'/img/PhoneYellow.svg'}
								width={26}
								height={26}
								alt={'Call Us'}
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
