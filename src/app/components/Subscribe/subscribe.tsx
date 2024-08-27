import styles from "./subscribe.module.css"
import Image from "next/image"
import GoogleStore from "../../../../public/Images/goole-play-white.svg"
import AppStore from "../../../../public/Images/Layer_1.svg"
import Mobile2 from "../../../../public/Images/Mobile2.svg"
import Mobile from "../../../../public/Images/Mobile.svg"
export const Subscribe =()=>{
    return (
        <>
 <div className={styles.subscription}>
            <div className={styles.col}>
                <h3>Subscribe here for exclusive offers and updates!</h3>
                <div className={styles.inputBox}>
                    <input className={styles.inputField} type="text" placeholder="Name"/>
                    <input className={styles.inputField} type="email" placeholder="Email"/>
                </div>
                <p>Don&apos;t miss out! enter your email and your name, then hit subscribe to unlock a world of special
                    offers and details.</p>
                <button>Subscribe</button>
            </div>
            <div className={styles.col}>
                <div className={styles.redBack}>
                    <Image src={Mobile} alt="mobile" width={231} height={417} />
                    <div className={styles.contents}>
                        <p>Enter your number and receive a direct link to download the app</p>
                        <input type="text" className={styles.enterNumber} placeholder="Enter Phone Number"/> 
                        <button>Get the link</button>
                        <p>Get in on</p>
                        <div className={styles.socialMedia}>
                            <Image src={AppStore} alt="app-store" width={24} height={24} />
                            <Image src={GoogleStore} alt="google-app" width={24} height={24} />
                        </div>
                    </div>
                </div>
                <div className={styles.redBackMob}>
                    <div className={styles.redBackRow}>
                        <Image src={Mobile2} alt="mobile" width={136} height={245} />
                        <div className={styles.socialMedia}>
                            <p>Get in on</p>
                            <Image src={AppStore} alt="app-store" width={100} height={30} />
                            <Image src={GoogleStore} alt="google-app" width={100} height={30} />

                            <p>Enter your number and
                                receive a direct link
                                to download the app
                            </p>
                        </div>


                    </div>

                    <div className={styles.redBackRow2}>
                        <div className={styles.input}>

                            <input type="text" className={styles.enterNumber} placeholder="Enter Phone Number"/>
                        </div>
                        <button>Get the Link</button>
                    </div>

                </div>

            </div>
        </div>
        </>
    )
}