import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div>
      <Link to="/tictactoe">
        <button>Play Tic Tac Toe</button>
      </Link>
    </div>
  );
}

export default Home;
