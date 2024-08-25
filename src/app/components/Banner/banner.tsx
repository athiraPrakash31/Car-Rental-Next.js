import styles from "./banner.module.css"
import Image from "next/image"
import BannerImage from "../../../../public/Images/main-banner.svg"
export const Banner = () => {
    return (
        <>
            <div className={styles.banner}>
                <Image className={styles.image} src={BannerImage} alt="banner-image"  loading="lazy"/>
               
                <div className={styles.bannerText}>
                    <p>Recieve guarnteed <button className={styles.bannerButton}>GIFT VOUCHER</button>
                    </p>
                    <p>on a monthly hire or lease</p>
                    <div className={styles.btn}>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    </div>

                </div>
            </div>
        </>
    )
}