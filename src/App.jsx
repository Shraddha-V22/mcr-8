import { Routes, Route } from "react-router-dom";
import Event from "./pages/Event";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:eventId" element={<Event />} />
      </Routes>
    </>
  );
}

export default App;
