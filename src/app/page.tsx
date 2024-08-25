import { Accordions } from "./components/Accordion/accordion";
import { Banner } from "./components/Banner/banner";
import { Booking } from "./components/Booking/booking";
import { CarCard } from "./components/CarCard/car";
import { Destination } from "./components/Destination/destination";
import { Footer } from "./components/Footer/footer";
import { MainNav } from "./components/MainNav/mainNav";
import { Marquee } from "./components/Marquee.tsx/marquee";
import { Navbar } from "./components/Navbar/navbar";
import { RentLease } from "./components/RentLease/rent";
import {Search} from "./components/SearchTab/search";
import { Subscribe } from "./components/Subscribe/subscribe";

export default function Home() {
  return (
   <>
   <Navbar/>
   <MainNav/>
   <Marquee/>
   <Search/>
   <Booking/>
   <Banner/>
   <CarCard/>
   <Subscribe/>
   <RentLease/>
   <Destination/>
   <Accordions/>
   <Footer/>
   </>
  );
}
