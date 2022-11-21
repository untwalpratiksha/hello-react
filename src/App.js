import "./App.css";
import FetchData from "./components/FetchData";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <FetchData />
    </>
  );
}

export default App;
