import { Routes, Route, Link } from "react-router-dom";

import Home from "./routes/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<h1>H1 ABOUT </h1>} />
    </Routes>
  );
}

export default App;
