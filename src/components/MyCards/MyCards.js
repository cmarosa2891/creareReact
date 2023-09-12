import React from "react";
import cardsData from "./MyCards.json";

const CardList = () => {
  return (
    <div>
      {cardsData.map((card) => (
        <div key={card.id}>
          <h2>{card.title}</h2>
          <p>{card.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
