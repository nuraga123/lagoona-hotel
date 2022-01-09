import React from "react";
import ElementsContent from "../ElementsContent/ElementsContent";
import './FeaturesContent.css';
import elements from "../elements/elements";

const FeaturesContent = () => {

  return(
    <div>
    <div className="main">
      <div>
        <h1 className="title">Спецпредложения</h1>
        {elements.map(item => (
          <ElementsContent
            img={item.img} 
            title={item.title}
            details={item.details}
            price={item.price}
          /> 
        ))}
      </div>
      <div>
        <div className="main__contayner3">
          <img className="main__img" src="/imgLoga/main3.png" alt="maldiv"/>
          <h2 className="img1__title3">Номера категории люкс</h2>
          <span className="img1__price3">от 5000 р</span>
          <span className="details3">Подробнее</span>
          <div className="img1__strelka3"></div>
        </div>
      </div>
    </div>
      <h1 className="title">О нас</h1>
      <p className="main__text">
        Идейные соображения высшего порядка, а также сложившаяся структура организации влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Равным образом сложившаяся структура организации требуют определения и уточнения существенных финансовых и административных условий.
      </p>
    </div>
  );
};

export default FeaturesContent;
// Спецпредложения