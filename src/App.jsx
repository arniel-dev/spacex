import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "../src/pages/home/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
