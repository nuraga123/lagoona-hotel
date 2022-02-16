import React from "react";
import './FeaturesContent.css';
import ElementContent from "./ElementsContent/ElementsContent";
import leftColElements from "./elements/leftColElements";
import rightColElements from "./elements/rightColElements";
import Heading from "../Heading/Heading";


const FeaturesContent = () => {
  return(
    <div>
      <Heading content="Спецпредложения" />
      <div className="section">
        <div className="section__left-col">
          {leftColElements.map ((item) => (
           <ElementContent {...item}/>
          ))}
        </div>
        <div className="section__right-col">
          {rightColElements.map((item) => (
            <ElementContent {...item}/>
          ))}
        </div>
      </div>
      <Heading content="О нас" />
      <p className="main__text">
        Идейные соображения высшего порядка, а также сложившаяся структура организации влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Равным образом сложившаяся структура организации требуют определения и уточнения существенных финансовых и административных условий.
      </p>
    </div>
  );
};

export default FeaturesContent;



  // const foo = { bar: { baz: 'foo' } };
  // const { bar: { baz, bad, baf } } = foo;
  // foo.bar.baz
  // console.log(baz);

  // const str = "string"; // ['str']
  // const numb = 1; // ['numb']

  // const obj = { foo: 'foo' }; // ['obj' + ref]
  // const copyObj = obj; // [ref of 'obj']

  // const foo = { bar: 'bar', baz: 'baz', hen: "111" };
  // const copyFoo = {...foo}; // { bar: 'bar', baz: 'baz' } // правильное копирование ключей из обЪкта
  // copyFoo.bar = 'baz';
  // copyFoo.bar === foo.bar; // false

  // const fakeCopyFoo = foo;
  // fakeCopyFoo.bar = 'foo';
  // fakeCopyFoo.bar === foo.bar; // true

  // const arr = [1, 2, 3];
  // const copyArr = [...arr]; // [1, 2, 3]
  // const fakeCopyArr = arr;