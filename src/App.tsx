import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import TicTacToeGame from "./tictactoe/components/TicTacToeGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tictactoe" element={<TicTacToeGame />} />
      </Routes>
      <Link to="/tictactoe">
        <button>Play Tic Tac Toe</button>
      </Link>
    </BrowserRouter>
  );
}

export default App;
