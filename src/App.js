import "./App.css";
import ContactsContent from "./components/ContactsContent/ContactsContent";
import FeaturesContent from "./components/FeaturesContent/FeaturesContent";
import FooterContent from "./components/FooterContent/FooterContent";
import Header from "./components/header/Header";
import ListRooms from "./components/ListRooms/ListRooms";
import Plus from "./components/plus/Plus";
import SectionService from "./components/SectionService/SectionService";
import TravelContent from "./components/TravelContent/TravelContent";

function App() {

  return (
    <div>
      <Header/>
      <FeaturesContent/>
      <SectionService/>
      <Plus/>
      <ListRooms/>
      <TravelContent/>
      <ContactsContent/>
      <FooterContent/>
    </div>
  );
};

export default App;
