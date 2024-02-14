'use client'
import useShopCartStore from '@/app/shopCartStore'
import { useUserStore } from '@/app/userStore'
import { HeaderInfo } from '@/components/Header/HeaderInfo'
import { roboto } from '@/config/fonts/fonts'
import { formatPrice } from '@/utils/formatPrice'
import { AlertTriangle, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import styles from './Header.module.scss'

export const Header = () => {
	const { token } = useUserStore()
	const { shopCartAmount } = useShopCartStore()
	const [amount, setAmount] = useState<number | null>(null)

	// const fetchData = async () => {
	//     if(token) {
	//         const data = await getShopCartAmount(token);
	//         setAmount(data);
	//     }
	// };
	useEffect(() => {
		setAmount(shopCartAmount)
	}, [shopCartAmount, token])
	const handleClick = () => {
		if (!token)
			toast('В начале войдите в аккаунт', {
				position: 'bottom-right',
				icon: <AlertTriangle color={'#000'} width={15} height={15} />,
			})
		else if (token != '') {
			const fetchData = async () => {
				// const data = await getShopCartAmount(token);
				setAmount(shopCartAmount)
			}
			// fetchData();
		}
	}
	return (
		<div className={styles.headerBlock} suppressHydrationWarning={true}>
			<HeaderInfo />
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<Link href={'/'}>
						<div className={styles.logo}>
							<h1 className={`${styles.logo_1} ${roboto.className}`}>
								Стройбаза
							</h1>
							<h1 className={`${styles.logo_2} ${roboto.className}`}>
								«Тиски»
							</h1>
						</div>
					</Link>
					{/*<nav className={styles.nav}>*/}
					{/*    {HeaderLinks.length && HeaderLinks.map((link, ind) => {*/}
					{/*        return <Link href={link.link} key={ind} className={styles.nav_link}>{link.text}</Link>*/}
					{/*    })}*/}
					{/*</nav>*/}

					<Link
						href={token ? '/shop_cart' : '/login'}
						onClick={() => {
							handleClick()
						}}
						className={styles.shopCart}
					>
						<ShoppingCart
							width={35}
							height={35}
							className={styles.shopCart_img}
						/>
						<p className={styles.shopCart_value}>
							{amount ? formatPrice(amount) : 0}₽
						</p>
					</Link>
				</div>
			</div>
		</div>
	)
}
