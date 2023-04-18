
import { useState } from 'react'

export default function KarzinkaPizza({ add, setTotal, karzinka, setKarzinka }) {

    const [son, setSon] = useState(JSON.parse(localStorage.getItem('sonn')) || 1)

    localStorage.setItem('sonn', JSON.stringify(son))

    let totall = 0
    if(son == -14)(
        setSon(1)
    )

    function Minus(id) {
        setSon(son - 1)
        if (son == 1 || son < 1) {
            const newData = karzinka.filter((value) => value.id !== id)
            setKarzinka(newData)
            setTotal(0)
        }   
    }

    function Pilus() {
        setSon(son + 1)
    }



    setTotal(totall += add.price * son);


    return (

        <div className="product">
            <img src={add.img} alt="" />
            <div className="productInfos">
                <div className="karzinkaInfo">
                    <p>{add.name}</p>
                    <span>{add.info} ,{add.sm} cm</span>
                </div>

                <div className="ProductPrice">
                    <div className='productCounter'>
                        <span onClick={() => Minus(add.id)}>-</span>  <p>{son}</p> <span onClick={() => Pilus()} >+</span>
                    </div>
                    <span>{`${add.price * son} ₽`}</span>
                </div>
            </div>
        </div>


    )
}