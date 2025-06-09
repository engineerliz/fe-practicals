import { useState } from "react";
import { WINNING_COMBOS } from "../constants/winningCombos";
import Tile, { tileValue } from "./Tile";

export type player = "x" | "o";

export default function TicTacToeGame() {
  const [currentPlayer, setCurrentPlayer] = useState<player>("x");
  const [board, setBoard] = useState<tileValue[]>([
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
  ]);

  const getTileValue = (n: number) => {
    return board[n];
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        width: 650,
      }}>
      {board?.map((row, n) => (
        <Tile
          index={n}
          value={getTileValue(n)}
          onClick={function (n) {
            const boardValue = board[n];
            if (boardValue === "empty") {
              let copy = [...board];

              copy[n] = currentPlayer;

              setBoard(copy);
              for (const combo of WINNING_COMBOS) {
                console.log([copy[combo[0]], copy[combo[1]], copy[combo[2]]]);
                console.log("currentPlayer", currentPlayer);

                const match =
                  copy[combo[0]] === currentPlayer &&
                  copy[combo[1]] === currentPlayer &&
                  copy[combo[2]] === currentPlayer;

                if (match) {
                  alert(`Winner: ${currentPlayer}`);
                  return;
                } else {
                  setCurrentPlayer(currentPlayer === "x" ? "o" : "x");
                }
              }
            }
          }}
        />
      ))}
    </div>
  );
}
