import React, {useEffect, useState} from 'react';
import styles from './ProductCard.module.scss'
import {IProduct} from "@/models/IProduct";
import {ShoppingCart, Star} from "lucide-react";
import Link from "next/link";
import {roboto} from "@/config/fonts/fonts";
import {useShopCartStore} from "@/pages/ShopCart/shopCartStore";

export const ProductCard = ({ product, token }: { product: IProduct, token: string }) => {
    const [inCart, setInCart] = useState<boolean>(false)
    const {addShopCartProduct} = useShopCartStore()
    const addToCart = () => {
        addShopCartProduct(token, product)
        console.log(`Add to cart product with id ${product.product_id}`)
    }
    return (
        <div className={styles.linkWrapper}>
            <Link href={`/product/${product.product_id}`} className={styles.containerLink}>
                <div className={styles.container}>
                    <div
                        className={styles.img}
                        style={{ background: `#F9F9F9 url('/img/ProductImage.jpg') center center/cover no-repeat` }}
                    />
                    <div className={styles.meta}>
                        <p className={`${styles.meta_name} ${roboto.className}`}>{ product.name }</p>
                        <div className={styles.meta_block_2}>
                            <div className={styles.meta_reviews}>
                                <div className={styles.meta_stars}>
                                    <Star width={18} height={18} color={'#EEB200'} fill={'#EEB200'} className={styles.star}/>
                                    <Star width={18} height={18} color={'#EEB200'} fill={'#EEB200'} className={styles.star}/>
                                    <Star width={18} height={18} color={'#EEB200'} fill={'#EEB200'} className={styles.star}/>
                                    <Star width={18} height={18} color={'#EEB200'} fill={'#EEB200'} className={styles.star}/>
                                    <Star width={18} height={18} color={'#EEB200'} fill={'#EEB200'} className={styles.star}/>
                                </div>
                                <p className={`${styles.meta_reviewsQuantity}`}>777 отзывов</p>
                            </div>
                            <div className={styles.meta_bottomPart}>
                                <p className={styles.meta_price}>{ product.price }₽</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
            <button className={styles.meta_btn} onClick={() => addToCart()}>
                <ShoppingCart
                    width={25}
                    height={25}
                    className={styles.shopCart_img}
                    id={'shopCartIcon'}
                    color={'#000000'}
                    fill={inCart ? '#000000' : '#ffffff'} />
            </button>
        </div>
    )
}