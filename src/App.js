import "./App.css";
import FeaturesContent from "./components/FeaturesContent/FeaturesContent";
import Header from "./components/header/Header";
import Plus from "./components/plus/Plus";
import SectionService from "./components/SectionService/SectionService";
function App() {

  return (
    <div>
      
      <Header/>
      <FeaturesContent/>
      <SectionService/>
      <Plus/>
    </div>
  );
};

export default App;
