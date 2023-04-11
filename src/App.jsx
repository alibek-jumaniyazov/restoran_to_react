import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Pizza from "./pages/Pizza";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      <div className="container">
        <Routes>
          <Route path="/pizza" element={<Pizza/>}/>
        </Routes>
      </div>

    </div>
  );
}

export default App;
