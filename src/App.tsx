import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import TicTacToeGame from "./tictactoe/components/TicTacToeGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tictactoe" element={<TicTacToeGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
