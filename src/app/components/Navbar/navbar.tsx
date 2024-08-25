import Link from "next/link"
import Image from "next/image"
import facebookIcon from "../../../../public/Images/facebook.svg"
import InstagramIcon from "../../../../public/Images/instagram.svg"
import TwitterIcon from "../../../../public/Images/twitter.svg"
import LinkedIn from "../../../../public/Images/linked-in.svg"


import styles from "./navbar.module.css"

export const Navbar = () => {
     const socialMediaIcons = [
        { src: facebookIcon, alt: "facebook", link: "#" },
        { src: InstagramIcon, alt: "instagram", link: "#" },
        { src: TwitterIcon, alt: "twitter", link: "#" },
        { src: LinkedIn, alt: "linkedin", link: "#" },

     ]
    
    return (
        <>
            <nav>
                <div className={styles.socialIcons}>
                    <ul>
                       {socialMediaIcons.map((icon,index)=>(
                        <li key={index}>
                        <a href={icon.link}>
                            <Image src={icon.src} alt={icon.alt} width={20} height={15} />
                        </a>
                    </li>
                       ))}
                    </ul>
                 
                </div>
            </nav>
        </>
    )
}