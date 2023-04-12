import { useState } from "react";
import AllPizza from "../components/AllPizza";
import Header from "../components/Header";

export default function Pizza(){

    const [karzinka , setKarzinka] = useState(JSON.parse(localStorage.getItem('add')) || [])

    localStorage.setItem('add', JSON.stringify(karzinka))

    function addProduct(id, img, name,info,price,xit){
        setKarzinka(value => [...value, {
            id: id,
            img: img,
            name: name,
            info: info,
            price: price,
            xit: xit,
          }])
    }

    return(
        <div className="Pizza">
            <Header karzinka={karzinka}/>
            <AllPizza addProduct={addProduct}/>
        </div>
        
    )
}