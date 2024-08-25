import styles from './rent.module.css'
import Image from 'next/image'
import Car from '../../../../public/Images/red-car.svg'
import Calender from '../../../../public/Images/red-calender.svg'
import Location from '../../../../public/Images/red-location.svg'
export const RentLease = () => {

    const steps = [
        {
            id:"01",
            image:Location,
            alt:"location",
            descriptions:"Select the location. Browse through our available options and find the perfect car to suit your needs"
        },
        {
            id:"02",
            image:Car,
            alt:"Car",
            descriptions:"Choose your desired Pick-Up date and time."
        },
        {
            id:"03",
            image:Calender,
            alt:"Calender",
            descriptions:"Make payment and book the car. Select an option to either have the car delivered to your location or pick it up directly from us."
        }
    ]
    return (
        <>
            <div className={styles.rentHeading}>
                <h2>Rent/Lease in 3 easy steps</h2>
            </div>
            <div className={styles.row}>
            {steps.map((step, index) => (
                    <div key={index} className={styles.rentBox}>
                        <h3>{step.id}</h3>
                        <div className={styles.card}>
                            <Image src={step.image} alt={step.alt} width={50} height={50} />
                            <p>{step.descriptions}</p>
                        </div>
                    </div>
                ))}

               




            </div>

        </>
    )
}