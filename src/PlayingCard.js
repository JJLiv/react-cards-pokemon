import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import { useFlip } from "./hooks.js"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const flipCard = useFlip();
  return (
    <img
      src={flipCard.isFacingUp ? front : back}
      alt="playing card"
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
