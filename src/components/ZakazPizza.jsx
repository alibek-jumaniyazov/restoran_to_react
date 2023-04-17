import { useState } from "react"

export default function ZakazPizza({ add }) {
    const [son, setSon] = useState(JSON.parse(localStorage.getItem('sonn')) || 1)

    localStorage.setItem('sonn', JSON.stringify(son))

    function Minus() {
        setSon(son - 1)
        if (son == 0) {
            setSon(son + 0)
          }
    }

    function Pilus() {
        setSon(son + 1)
    }

    
    return (
        <div className="ZakazPizza">
            <div className="pizzaImgInfo">
                <img src={add.img} alt="" />
                <div className="pizzaInfo">
                    <p>{add.name}</p>
                    <span>{add.info}, {add.sm}</span>
                </div>
            </div>
            <div className="pizzaCountPrice">
                <div className='productCounter'>
                    <span onClick={() => Minus()}>-</span>  <p>{son}</p> <span onClick={() => Pilus()} >+</span>
                </div>
                <span>{`${add.price * son} ₽`}</span>
            </div>
        </div>
    )
}