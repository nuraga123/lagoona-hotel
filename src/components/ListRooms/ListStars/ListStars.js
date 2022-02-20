import React, { useMemo } from "react";
import Star from "../star/Star";
import './ListStars.css';


function ListStars({ rating }) {
  const defaultList = useMemo(() => [
    { active: false },
    { active: false },
    { active: false },
    { active: false },
    { active: false },
  ], []);

  const list = useMemo(() => {
    const copyDefaultList = [...defaultList];

    for (let i = 0; i < rating; i += 1) {
      copyDefaultList[i].active = true;
    }

    return copyDefaultList;
  }, [rating, defaultList]);

  return (
    <ul className="list-stars">
      {list.map(({ active }) => {
        return (
          <li className="list-stars__element">
            <Star active={active} />
          </li>
        );
      })}
    </ul>
  );
}

export default ListStars;