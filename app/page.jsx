import Customers from "../components/Customers";
import Footer from "../components/Footer";
import Recomend from "../components/recomend";
import StartHere from "../components/StartHere";
import TravelNews from "../components/TravelNews";
import ViewBar from "../components/ViewBar/ViewBar";
import WhyChooseUS from "../components/WhyChooseUS";
import HomePage from "./Home/page";

export default function page() {
  return (
    <div >
      <HomePage />
      <ViewBar/>
      <Recomend/>
      <WhyChooseUS/>
      <Customers/>
      <TravelNews/>
      <StartHere/>
      <Footer/>
    </div>
  );
}
