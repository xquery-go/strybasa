'use client'
import useProfileStore from '@/app/ProfileStore'
import { Order } from '@/components/Order'
import { alumniSans, roboto } from '@/config/fonts/fonts'
import { IOrder } from '@/models/IOrder'
import { queryTypes, useQueryStates } from 'next-usequerystate'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import styles from './OrdersPage.module.scss'

const ProfilePage = () => {
	const cookies = new Cookies(null, { path: '/' })
	const token = cookies.get('token')
	const { setCurTab, getStatuses, getOrders } = useProfileStore()
	const [orders, setOrders] = useState<IOrder[]>([])
	const [statuses, setStatuses] = useState<string[]>(['Все'])
	const router = useRouter()
	useEffect(() => {
		setCurTab('orders')
	}, [setCurTab])
	const [query, setQuery] = useQueryStates({
		statusFilter: queryTypes.string,
	})
	useEffect(() => {
		if (!token) router.push('/login')
		else {
			getStatuses(token).then(res => setStatuses(res))
			getOrders(token, query.statusFilter).then(res => setOrders(res))
		}
	}, [])
	return (
		<div className={styles.content}>
			<title>Профиль | Стройбаза Тиски</title>

			<h1 className={`${styles.name} ${roboto.className}`}>Заказы</h1>
			<select
				className={`${styles.select} ${alumniSans.className}`}
				onChange={e => {
					setQuery({ statusFilter: e.target.value })
				}}
				defaultValue={query.statusFilter ? query.statusFilter : 'Все'}
			>
				{statuses.map((item, ind) => {
					return (
						<option key={ind} value={item} className={styles.option}>
							{item}
						</option>
					)
				})}
			</select>
			<div className={styles.orders}>
				{orders.map(order => {
					console.log(order.status)
					return (
						<>
							{order.status == query.statusFilter ||
							query.statusFilter == 'Все' ||
							!query.statusFilter ? (
								<Order order={order} key={order.id} />
							) : (
								<></>
							)}
						</>
					)
				})}
			</div>
		</div>
	)
}

export default ProfilePage
