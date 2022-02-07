import React from "react";
import Heading from "../Heading/Heading";
import "./ListRooms.css";
import ElementRooms from "../ListRooms/Rooms/ElementRooms";
import DataRooms from "./Rooms/DataRooms";


function ListRooms() {
  return (
    <div>
      <Heading content="Размещение" />
      <div className="list-rooms">
        {DataRooms.map((item) => (
          <ElementRooms {...item} />
        ))}

        <div className="rooms-catalog">
          <img
            className="rooms-catalog__img"
            src="/assets/images/rooms/rooms-catalog.jpg"
            alt="catalog" />
          <span className="rooms-catalog__title">
            Посмотреть все варианты
            <div className="rooms-catalog__pointer"></div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ListRooms;