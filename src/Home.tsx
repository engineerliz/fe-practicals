import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 15,
        margin: 40,
      }}>
      <h1>Frontend Practicals</h1>
      <Link to="/tictactoe">
        <button>Tic Tac Toe</button>
      </Link>
      <Link to="/search-debounce">
        <button>Search Debounce</button>
      </Link>
    </div>
  );
}

export default Home;
