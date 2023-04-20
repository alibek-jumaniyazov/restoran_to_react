import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Pizza from "./pages/Pizza";
import Zakaz from "./pages/Zakaz";
import { useState } from "react";
import Login from "./pages/Login";

function App() {
  const [zakaz , setZakaz] = useState(  JSON.parse(localStorage.getItem('zakaz')) || [])

  localStorage.setItem('zakaz', JSON.stringify(zakaz))

const [total , setTotal] = useState(0)

  function addZakazProduct(id, img, name, info, price, xit, gramm, count, tonke, sm){
      setZakaz(value => [...value, {
        id: id,
        img: img,
        name: name,
        info: info,
        price: price,
        xit: xit,
        gramm: gramm,
        count: count,
        tonke: tonke,
        sm: sm,
        }])
  }
  

  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={<Home total={total} setTotal={setTotal} addZakazProduct={addZakazProduct}/>} />
      </Routes>
      <div className="container">
        <Routes>
          <Route  path="/pizza" element={<Pizza total={total} setTotal={setTotal} addZakazProduct={addZakazProduct}/>} />
          <Route  path="/zakaz" element={<Zakaz total={total} setTotal={setTotal} setZakaz={setZakaz} zakaz={zakaz} />} />
          <Route  path="/login" element={<Login/>} />

        </Routes>
      </div>

    </div>
  );
}

export default App;
