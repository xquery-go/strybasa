'use client';
import React, {useEffect} from "react";
import styles from './AdminPanelPage.module.scss'
import {Collapse} from "antd";
import {LogOut} from "lucide-react";
import {Panel} from "rc-collapse";
import {GetAllCategoriesComp} from "@/adminComponents/Categories/getAllCategoriesComp";
import {AddCategoryComp} from "@/adminComponents/Categories/addCategoryComp";
import {GetCategoryByIdComp} from "@/adminComponents/Categories/getCategoryByIdComp";
import {ChangeCategoryByIdComp} from "@/adminComponents/Categories/changeCategoryByIdComp";
import {DeleteCategoryByIdComp} from "@/adminComponents/Categories/deleteCategoryByIdComp";
import {useRouter} from "next/navigation";
import {DeleteTagByIdComp} from "@/adminComponents/Tags/deleteTagByIdComp";
import {AddTagComp} from "@/adminComponents/Tags/addTagComp";
import {GetTagByIdComp} from "@/adminComponents/Tags/getTagByIdComp";
import {ChangeTagByIdComp} from "@/adminComponents/Tags/changeTagByIdComp";
import {GetAllTagsComp} from "@/adminComponents/Tags/getAllTagsComp";
import {GetAllProductsComp} from "@/adminComponents/Products/getAllProductsComp";
import {AddProductComp} from "@/adminComponents/Products/addProductComp";
import {GetProductByIdComp} from "@/adminComponents/Products/getProductByIdComp";
import {ChangeProductByIdComp} from "@/adminComponents/Products/changeProductByIdComp";
import {DeleteProductByIdComp} from "@/adminComponents/Products/deleteProductByIdComp";
import {useUserStore} from "@/app/userStore";
import {GetAllOrdersComp} from "@/adminComponents/Orders/getAllOrdersComp";
import {ChangeOrderByIdComp} from "@/adminComponents/Orders/changeOrderByIdComp";
import {DeleteOrderByIdComp} from "@/adminComponents/Orders/deleteOrderByIdComp";
import {GetOrderByIdComp} from "@/adminComponents/Orders/getOrderByIdComp";
import {GetOrdersByPhoneNumberComp} from "@/adminComponents/Orders/gerOrdersByPhoneNumberComp";
import {GetOrdersStatusesComp} from "@/adminComponents/Orders/getOrdersStatusesComp";
import {AddNewAdministrator} from "@/adminComponents/Users/addNewAdministratorComp";

export default function AdminPanelPage1() {
    const {token, quitAccount, curUser, checkUser} = useUserStore()
    const router = useRouter()
    useEffect(() => {
        checkUser();
        if(!token || !curUser?.is_staff) router.push('/admin_product')
    }, [token, curUser])
    return (
        <div className={styles.wrapper}>
            <button className={styles.logout} onClick={() => {
                quitAccount();
                router.push('/admin_product');
            }}>
                <LogOut width={30} height={30} color={'#ff4d4f'} strokeWidth={'1.2px'} />
                <p className={styles.logout_text}>Выйти</p>
            </button>
            <div className={styles.content}>
                <h1 className={styles.title}>Панель администратора</h1>
                <div className={styles.queries}>
                    <div className={styles.block}>
                        <h2 className={styles.block_title}>Пользователи</h2>
                        <Collapse>
                            <Panel header='Сделать нового администратора'>
                                <AddNewAdministrator />
                            </Panel>
                        </Collapse>
                    </div>
                    <div className={styles.block}>
                        <h2 className={styles.block_title}>Категории</h2>
                        <Collapse>
                            <Panel header='Получить все категории'>
                                <GetAllCategoriesComp />
                            </Panel>
                            <Panel header='Добавить категорию'>
                                <AddCategoryComp />
                            </Panel>
                            <Panel header='Получить категорию по id'>
                                <GetCategoryByIdComp />
                            </Panel>
                            <Panel header='Изменить категорию по id'>
                                <ChangeCategoryByIdComp />
                            </Panel>
                            <Panel header='Удалить категорию по id'>
                                <DeleteCategoryByIdComp />
                            </Panel>
                        </Collapse>
                    </div>
                    <div className={styles.block}>
                        <h2 className={styles.block_title}>Тэги</h2>
                        <Collapse>
                            <Panel header='Получить все тэги'>
                                <GetAllTagsComp />
                            </Panel>
                            <Panel header='Добавить тэг'>
                                <AddTagComp />
                            </Panel>
                            <Panel header='Получить тэг по id'>
                                <GetTagByIdComp />
                            </Panel>
                            <Panel header='Изменить тэг по id'>
                                <ChangeTagByIdComp />
                            </Panel>
                            <Panel header='Удалить тэг по id'>
                                <DeleteTagByIdComp />
                            </Panel>
                        </Collapse>
                    </div>
                    <div className={styles.block}>
                        <h2 className={styles.block_title}>Товары</h2>
                        <Collapse>
                            <Panel header='Получить все товары'>
                                <GetAllProductsComp />
                            </Panel>
                            <Panel header='Добавить товар'>
                                <AddProductComp />
                            </Panel>
                            <Panel header='Получить товар по id'>
                                <GetProductByIdComp />
                            </Panel>
                            <Panel header='Изменить товар по id'>
                                <ChangeProductByIdComp />
                            </Panel>
                            <Panel header='Удалить товар по id'>
                                <DeleteProductByIdComp />
                            </Panel>
                        </Collapse>
                    </div>
                    <div className={styles.block}>
                        <h2 className={styles.block_title}>Заказы</h2>
                        <Collapse>
                            <Panel header='Получить все заказы'>
                                <GetAllOrdersComp />
                            </Panel>
                            <Panel header='Получить заказ по id'>
                                <GetOrderByIdComp />
                            </Panel>
                            <Panel header='Получить заказы по номеру телефона'>
                                <GetOrdersByPhoneNumberComp />
                            </Panel>
                            <Panel header='Получить все статусы заказов'>
                                <GetOrdersStatusesComp />
                            </Panel>
                            <Panel header='Изменить заказ по id'>
                                <ChangeOrderByIdComp />
                            </Panel>
                            <Panel header='Удалить заказ по id'>
                                <DeleteOrderByIdComp />
                            </Panel>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    )
}