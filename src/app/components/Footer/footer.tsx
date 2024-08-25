
import styles from './footer.module.css'
import Image from "next/image"
import Logo from "../../../../public/Images/logo.svg"
import FooterImage from "../../../../public/Images/image-footer.svg"
import facebook from "../../../../public/Images/Social Icons.svg"
import twitter from "../../../../public/Images/Social Icons(1).svg"
import instagram from "../../../../public/Images/Social Icons(2).svg"
import linkedin from "../../../../public/Images/Social Icons(3).svg"
import youtube from "../../../../public/Images/Social Icons(4).svg"
// mobile view icons
import fb from "../../../../public/Images/fb.svg"
import twt from "../../../../public/Images/twitter.svg"
import insta from "../../../../public/Images/instagram.svg"
import linked from "../../../../public/Images/linkedin.svg"
import utube from "../../../../public/Images/utube.svg"
import logo from "../../../../public/Images/logo-foot.svg"
import blueLogo from "../../../../public/Images/blue-logo.svg"
export const Footer = () => {
    return (
        <>

            <div className={styles.foot}>
                <div className={styles.footer2}>
                    <div className={styles.footer}>
                        <div className={`${styles.section} ${styles.logoSection}`}>
                            <Image src={Logo} alt="logo" width={24} height={24} />
                            <p>Member of the</p><p> Al Habtoor Group</p>
                        </div>
                        <div className={styles.section}>
                            <div className={styles.linksSection}>
                                <ul>
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Services</li>
                                </ul>
                                <ul>
                                    <li>Offers</li>
                                    <li>Contact Us</li>
                                </ul>
                                <ul>
                                    <li>FAQ</li>
                                    <li>Privacy Policy</li>
                                    <li>Service Request</li>
                                </ul>
                                <ul>
                                    <li>Career</li>
                                    <li>Terms & Conditions</li>
                                </ul>
                            </div>
                            <div className={styles.habtoorSection}>
                                <p>Al Habtoor Companies</p>
                                <ul>
                                    <li>Hospitality</li>
                                    <li>Real Estate</li>
                                    <li>Education</li>
                                    <li>Publishing</li>
                                    <li>Automotive</li>
                                    <li>Vehicle Leasing</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${styles.section} ${styles.socialSection}`}>
                            <h4>FOLLOW US ON</h4>
                            <div className={styles.socialIcons}>
                                <Image src={facebook} alt="facebook" width={24} height={24} />
                                <Image src={twitter} alt="twitter" width={24} height={24} />
                                <Image src={instagram} alt="instagram" width={24} height={24} />
                                <Image src={linkedin} alt="linkedin" width={24} height={24} />
                                <Image src={youtube} alt="youtube" width={24} height={24} />
                            </div>
                            <div className={styles.footerImg}>
                                <Image src={FooterImage} alt="footer image" width={24} height={24} />
                            </div>
                        </div>
                    </div>
                    <p className={styles.copyright}>© 2018 Car rental LLC - All Rights Reserved.</p>
                </div>
            </div>


            {/* mobile view */}
            <div className={styles.footer1}>

                <div className={styles.firstRow}>
                    <div className="first-sub">

                        <div className="logos">
                            <Image src={logo} alt="footer-logo" width={100} height={100} />

                        </div>

                    </div>
                    <div className={styles.secondSub}>
                        <Image src={fb} alt="facebook" width={20} height={20}/>
                        <Image src={twt} alt="twitter" width={20} height={20}/>
                        <Image src={insta} alt="instagram" width={20} height={20} />
                        <Image src={linked} alt="linkedin" width={20} height={20} />
                        <Image src={utube} alt="youtube"  width={20} height={20}/>
                    </div>
                </div>
                <div className={styles.secondRow}>
                    <ul >
                        <li>Home</li>
                        <li>Offers</li>
                        <li>Carrer</li>
                        <li>About Us</li>
                        <li>Locations</li>
                        <li>FAQ</li>
                        <li>Terms & Conditions</li>
                        <li>Service Request</li>
                        <li>Privacy Policy</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className={styles.thirdRow}>
                    <div className="heading-4">

                        <h4>Al HAbtoor Companies</h4>
                    </div>
                    <ul >
                        <li>Hospitality</li>
                        <li>Real Estate</li>
                        <li>Publishing</li>
                        <li>Automotive</li>
                        <li>Vehicle Leasing</li>
                    </ul>
                    <Image src={blueLogo} alt="logo" width={100} height={100} />
                </div>
                <div className={styles.copyright}>
                    <p>© 2018 Car rental LLC - All Rights Reserved.</p>
                </div>


            </div>
        </>
    )
}