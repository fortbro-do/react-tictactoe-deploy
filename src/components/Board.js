import React, { useState } from "react";
import Square from "./Square";
import "./Board.css";

const Board = ({ squares, onClick }) => {
  const randerSquare = (i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div className="board-wrapper">
      <div className="board-row">
        {randerSquare(0)}
        {randerSquare(1)}
        {randerSquare(2)}
      </div>
      <div className="board-row">
        {randerSquare(3)}
        {randerSquare(4)}
        {randerSquare(5)}
      </div>
      <div className="board-row">
        {randerSquare(6)}
        {randerSquare(7)}
        {randerSquare(8)}
      </div>
    </div>
  );
};
export default Board;
