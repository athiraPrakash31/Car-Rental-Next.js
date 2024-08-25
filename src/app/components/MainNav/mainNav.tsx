"use client"
import Link from "next/link"
import Image from "next/image"
import styles from "./mainNav.module.css"
import HamburgerIcon from "../../../../public/Images/hamburger.svg"
import closeIcon from "../../../../public/Images/close.svg"
import { useState } from "react"

export const MainNav = () => {

    interface linkItem  {
        href: string,
        label:string

    }

    const links:linkItem[] = [
        { href: "#", label: "About" },
        { href: "#", label: "Offers" },
        { href: "#", label: "Coporate" },
        { href: "#", label: "Personal" },
        { href: "#", label: "Locations" },
        { href: "#", label: "Contact Us" }

    ]
    const [isOpen, setIsOpen] = useState(false)


    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    }
    return (
        <>

            <div className={styles.navbar}>
                <Image loading="lazy" src="./Images/title.svg" alt="car-rental" width={300} height={50} />
                <ul>
                {links.map((link, index) => (
                        <li key={index}>
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                    <li>
                        <Link href="#">
                            <Image src="/Images/notification-bell.svg" alt="facebook" width={20} height={20} />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <button>
                                <span>J</span>
                                John Doe
                            </button>
                        </Link>
                    </li>
                </ul>
                <div className={styles.hamburgerBar}>
                    <Image onClick={openModal} src={HamburgerIcon} alt="hamburger-icon" />
                </div>
            </div>

            <div className={`${styles.modal} ${isOpen ? styles.open : ''}`}>
                <div className={styles.closeButton}>
                    <Image src={closeIcon} alt="close-bar" onClick={closeModal} />
                </div>
                <ul>
                    {
                        links.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))
                    }
                </ul>
                <button id="login-signup">Login / Sign Up</button>
            </div>
        </>
    )
}