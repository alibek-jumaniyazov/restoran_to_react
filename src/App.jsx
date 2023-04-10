import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">

      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>

    </div>
  );
}

export default App;
