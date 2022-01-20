import "./App.css";
import FeaturesContent from "./components/FeaturesContent/FeaturesContent";
import Header from "./components/header/Header";
import ListRooms from "./components/ListRooms/ListRooms";
import Plus from "./components/plus/Plus";
import SectionService from "./components/SectionService/SectionService";


function App() {

  return (
    <div>
      <Header/>
      <FeaturesContent/>
      <SectionService/>
      <Plus/>
      <ListRooms/>
    </div>
  );
};

export default App;
