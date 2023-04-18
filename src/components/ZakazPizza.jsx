import { useState } from "react"

export default function ZakazPizza({ add , zakaz ,setZakaz ,setTotal }) {
    const [son, setSon] = useState(JSON.parse(localStorage.getItem('sonn')) || 1)

    localStorage.setItem('sonn', JSON.stringify(son))

    let totall = 0

    function Minus(id) {
        setSon(son - 1)
        if (son == 1 || son < 1) {
            const newData = zakaz.filter((value) => value.id !== id)
            setZakaz(newData)
            setTotal(0)
        }   
    }

    function Pilus() {
        setSon(son + 1)
    }

    setTotal(totall += add.price * son);
    return (
        <div className="ZakazPizza">
            <div className="pizzaImgInfo">
                <img src={add.img} alt="" />
                <div className="pizzaInfoo">
                    <p>{add.name}</p>
                    <span>{add.info}, {add.sm}</span>
                </div>
            </div>
            <div className="pizzaCountPrice">
                <div className='productCounter'>
                    <span onClick={() => Minus(add.id)}>-</span>  <p>{son}</p> <span onClick={() => Pilus()} >+</span>
                </div>
                <span className="zakazPrice">{`${add.price * son} ₽`}</span>
            </div>
        </div>
    )
}