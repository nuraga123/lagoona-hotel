import React, { useMemo } from "react";
import Star from "../Star/Star";
import './ListStars.css';


const ListStars = ({ rating }) => {
  const defaultList = [
    { active: false }, 
    { active: false }, 
    { active: false },
    { active: false },
    { active: false },
  ];

  const list = useMemo(() => {
    const copyDefaultList = [...defaultList];

    for (let i = 0; i < rating; i += 1) {
      copyDefaultList[i].active = true;
    }

    return copyDefaultList;
  }, [rating]);

  return (
    <ul className="list-stars">
      { list.map(({ active }) => {
          return (
            <li className="list-stars__element">
              <Star active={active} />
            </li>
          )
        })
      }
    </ul>
  );
};

export default ListStars;