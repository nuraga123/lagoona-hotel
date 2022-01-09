import "./App.css";
import HeaderLagoona from "./HeaderLagoona/HeaderLagoona";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";


function App() {
  return (
    <div>
      <HeaderLagoona/>
      <HeaderNavigation/>
      <div className="main">
        <h1 className="title">Спецпредложения</h1>
        <div className="main__contayner1">
          <img className="main__img1" src="/imgLoga/main1.jpg"/>
          <h2 className="img1__title">Мальдивские острова</h2>
          <span className="img1__price">от 55 000 р</span>
          <span className="details">Подробнее</span>
          <div className="img1__strelka"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
