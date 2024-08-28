"use client";
import { useState, useEffect } from "react";
import styles from "./banner.module.css";
import Image from "next/image";
import BannerImage1 from "../../../../public/Images/main-banner.svg";
import BannerImage2 from "../../../../public/Images/main-banner.svg";
import BannerImage3 from "../../../../public/Images/main-banner.svg";
import BannerImage4 from "../../../../public/Images/main-banner.svg";

export const Banner = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const images = [BannerImage1, BannerImage2, BannerImage3, BannerImage4];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsTransitioning(false);
            }, 500); // Duration of the transition
        }, 3500); // Change image every 3 seconds + transition duration

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className={styles.banner}>
            <div
                className={`${styles.imageContainer} ${
                    isTransitioning ? styles.transitioning : ""
                }`}
            >
                <Image
                    className={styles.image}
                    src={images[currentImageIndex]}
                    alt="banner-image"
                    loading="lazy"
                />
            </div>

            <div className={styles.bannerText}>
                <p>
                    Receive guaranteed{" "}
                    <button className={styles.bannerButton}>
                        GIFT VOUCHER
                    </button>
                </p>
                <p>on a monthly hire or lease</p>
                <div className={styles.btn}>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${
                                currentImageIndex === index ? styles.activeDot : ""
                            }`}
                            onClick={() => setCurrentImageIndex(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Banner;
