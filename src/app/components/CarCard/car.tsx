import styles from "./car.module.css";
import Image from "next/image";
import People from "../../../../public/Images/people.svg";
import Automatic from "../../../../public/Images/automatic.svg";
import Door from "../../../../public/Images/car-door.svg";
import Ac from "../../../../public/Images/ac.svg";
import Car1 from "../../../../public/Images/car1.svg";
import Car2 from "../../../../public/Images/car2.svg";

const carData = [
    {
        id: 1,
        imageSrc: Car1,
        name: "Mitsubishi Eclipse",
        description: "Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology and driving confidence.",
        price: "AED 2700/Monthly",
        features: [
            { icon: People, text: "6 people" },
            { icon: Automatic, text: "Automatic" },
            { icon: Door, text: "5 Doors" },
            { icon: Ac, text: "AC" },
        ],
    },
    {
        id: 2,
        imageSrc: Car2,
        name: "Jac J7",
        description: "S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact & Whipping test.",
        price: "AED 2700/Monthly",
        features: [
            { icon: People, text: "6 people" },
            { icon: Automatic, text: "Automatic" },
            { icon: Door, text: "5 Doors" },
            { icon: Ac, text: "AC" },
        ],
    },
];

export const CarCard = () => {
    return (
        <>
            <div className={styles.heading}>
                <h2>Most Popular Cars</h2>
            </div>
            <div className={styles.cards}>
                {carData.map((car) => (
                    <div key={car.id} className={styles.card}>
                        <Image src={car.imageSrc} alt={car.name} width={250} height={290} />
                        <div className={styles.col}>
                            <div className={styles.content}>
                                <h2>{car.name}</h2>
                                <p>{car.description}</p>
                                <div className={styles.icons}>
                                    {car.features.map((feature, index) => (
                                        <div key={index} className={styles[`icon${index + 1}`]}>
                                            <Image src={feature.icon} alt="" width={20} height={20} />
                                            <span className={styles.features}>{feature.text}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.booking}>
                                    <p>{car.price}</p>
                                    <button>Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
