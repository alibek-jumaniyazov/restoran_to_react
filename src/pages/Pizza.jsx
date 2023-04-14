import { useState } from "react";
import AllPizza from "../components/AllPizza";
import Header from "../components/Header";

export default function Pizza(){

    const [karzinka , setKarzinka] = useState( [])
// JSON.parse(localStorage.getItem('add')) ||
    // localStorage.setItem('add', JSON.stringify(karzinka))

    function addProduct(id, img, name,info,sm,price,xit){
        setKarzinka(value => [...value, {
            id: id,
            img: img,
            name: name,
            info: info,
            sm: sm,
            price: price,
            xit: xit,
          }])
    }
    const [son2,setSon2] = useState(JSON.parse(localStorage.getItem('son')) ||0)
    localStorage.setItem('son', JSON.stringify(son2))
    return(
        <div className="Pizza">
            <Header son2={son2} karzinka={karzinka}/>
            <AllPizza setSon2={setSon2} son2={son2} addProduct={addProduct}/>
        </div>
        
    )
}