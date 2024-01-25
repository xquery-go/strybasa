import React from 'react';
import styles from './AboutPage.module.scss'
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {roboto} from "@/config/fonts/fonts";

const AboutPage = () => {
    return (
        <div className={styles.wrapper}>
            <title>О нас | Стройбаза Тиски</title>
            <Header />
            <div className={styles.content}>
                <h1 className={`${styles.name} ${roboto.className}`}>О компании</h1>
                <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu porttitor ex, id gravida sem. Aenean commodo, lectus vel vehicula accumsan, quam urna fringilla dui, eu euismod enim ligula eu tortor. Aenean quis elit iaculis, imperdiet ipsum ac, porttitor risus. Etiam porta hendrerit ex finibus aliquet. Donec sit amet sodales massa. Nulla vitae turpis lectus. Nullam mollis ipsum et massa viverra scelerisque id in nibh. Pellentesque sapien ex, eleifend vitae varius in, molestie id eros.

                    Nam fringilla leo rhoncus magna efficitur finibus. Morbi et nisl in nunc vulputate varius non eu nibh. Ut gravida, leo quis sodales aliquam, mi ligula porta est, pretium cursus lacus tortor a tellus. Quisque sit amet magna sed quam euismod laoreet. Nullam cursus ipsum tempor lacinia feugiat. Duis non lorem eu velit ornare semper pulvinar eget neque. Vestibulum tempor facilisis neque, vitae rhoncus ante.

                    Donec quis orci et leo faucibus porta. Aliquam lacinia, magna iaculis lobortis pharetra, orci ante efficitur nisl, sit amet gravida turpis dui feugiat sapien. Cras tempor scelerisque dui non ultrices. Nulla tempor enim tincidunt nibh eleifend, non tempus massa tincidunt. Ut facilisis tellus nec odio aliquam, sed scelerisque diam laoreet. Duis auctor auctor lectus quis malesuada. Phasellus blandit libero ac tortor luctus mattis. Nulla orci risus, ultricies et sem non, efficitur commodo ante. Nam sit amet facilisis magna, ac placerat erat. Ut nec gravida enim, eu gravida nisl. Vivamus nec tellus aliquet, tristique risus eu, commodo diam.</p>
            </div>
            <Footer/>
        </div>
    )
}
export default AboutPage;