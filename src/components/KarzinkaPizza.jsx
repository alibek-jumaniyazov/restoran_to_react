
import { useState } from 'react'

export default function KarzinkaPizza({ add ,setTotal , total  ,}) {

    const [son , setSon] = useState( 1)
// JSON.parse(localStorage.getItem('sonn')) || 
    // localStorage.setItem('sonn', JSON.stringify(son))


    let totall = 0

    function Minus() {
        setSon(son - 1)
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
                        <span onClick={() => Minus()}>-</span>  <p>{son}</p> <span onClick={() => Pilus()} >+</span>
                    </div>
                    <span>{`${add.price * son} ₽`}</span>
                </div>
            </div>
        </div>


    )
}