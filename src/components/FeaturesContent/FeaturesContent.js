import React from "react";
import './FeaturesContent.css';
import ElementContent from "./ElementsContent/ElementsContent";
import leftColElements from "./elements/leftColElements";
import rightColElements from "./elements/rightColElements";


const FeaturesContent = () => {
  return(

    <div>
      <h1 className="title">
        Спецпредложения
      </h1>
      <div className="section">
        <div className="section__left-col">
          {leftColElements.map ((item) => (
            <ElementContent 
              size={item.size}
              img={item.img} 
              title={item.title}
              details={item.details}
              price={item.price}
              style__img={item.style__img}
              style__title={item.style__title}
              style__price={item.style__price}
              style__details={item.style__details}
              style__pointer={item.style__pointer}
            />
          ))}
        </div>
        <div className="section__ringht-col">
          {rightColElements.map((item) => (
            <ElementContent 
              size={item.size}
              img={item.img}
              title={item.title}
              details={item.details}
              price={item.price}
              style__img={item.style__img}
              style__title={item.style__title}
              style__price={item.style__price}
              style__details={item.style__details}
              style__pointer={item.style__pointer}
            />
          ))}
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