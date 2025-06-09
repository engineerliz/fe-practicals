import { player } from "./TicTacToeGame";

export type tileValue = player | "empty";

interface TileProps {
  value?: tileValue;
  index: number;
  onClick: (n: number) => void;
}

export default function Tile({ value, index, onClick }: TileProps) {
  return (
    <div
      onClick={() => {
        onClick(index);
      }}
      style={{
        border: "1px solid black",
        height: 200,
        width: 200,
        background: "yellow",
      }}>
      {/* {index} */}
      <br /> {value === "x" && <span>x</span>}
      {value === "o" && <span>o</span>}
    </div>
  );
}
