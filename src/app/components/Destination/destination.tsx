import styles from "./destination.module.css"
import Image from "next/image"
import LocationIcon from "../../../../public/Images/destination-icon.svg"
export const Destination = () =>{

    const locations=[
        "Dubai", "Abu Dubai","Sharjah","Fujairah","Ras Al Khaimah"
    ]
    return(
        <>
            <div className={styles.destinations}>
                
                <div className={styles.locations}>
                <h3>Locations</h3>
                </div>
                    <ul>
                    {locations.map((location, index) => (
                    <li key={index}>
                        <Image src={LocationIcon} alt="location" width={20} height={18} />
                        <span>{location}</span>
                    </li>
                    
                ))}
                    </ul>
                    
               
            </div>

        </>
    )
}