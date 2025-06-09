import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SearchDebounce from "./searchDebounce";
import TicTacToeGame from "./tictactoe/components/TicTacToeGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tictactoe" element={<TicTacToeGame />} />
        <Route path="/search-debounce" element={<SearchDebounce />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
