import "./App.css";
import FeaturesContent from "./FeaturesContent/FeaturesContent";
import HeaderLagoona from "./HeaderLagoona/HeaderLagoona";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";
import SectionServis from "./SectionServis/SectionServis";


function App() {

  return (
    <div>
      <HeaderLagoona/>
      <HeaderNavigation/>
      <FeaturesContent/>
      <h1 className="title">Услуги</h1>
      <div className="servis">
        <SectionServis/>
      </div>
      <h1 className="title">Преимущества</h1>
      
    </div>
  );
};

export default App;
