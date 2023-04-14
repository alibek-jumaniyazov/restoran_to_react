import LogoName from '../images/Group 152.svg'
import kazina from '../images/Shopping bag.svg'
import down from '../images/Arrow down.svg'
import { Link } from 'react-router-dom'
import x from '../images/Union.svg'
import KarzinkaPizza from './KarzinkaPizza'
import { useState } from 'react'

export default function Header({ karzinka , son2 }) {

    const [total , setTotal] = useState( 0)
//  JSON.parse(localStorage.getItem('total')) ||
    // localStorage.setItem('total', JSON.stringify(total))

    const [karzinkaDiv, setKarzinkADiv] = useState('allBox')

    function addKarzinka() {
        setKarzinkADiv('add')
        // body.classList.add('overfolw')
    }

    function Close() {
        setKarzinkADiv('allBox')
    }



    return (
        <div className="HomeHeader">
            <header>
                <Link to={"/"}>
                    <div className="logoName">
                        <img src={LogoName} alt="" />
                    </div>
                </Link>
                <ul className="list">
                  <Link to={'/pizza'}> <li className="item">Акции</li> </Link>
                  <Link to={'/pizza'}> <li className="item">Пицца</li> </Link>
                  <Link to={'/pizza'}> <li className="item">Суши</li> </Link>
                  <Link to={'/pizza'}> <li className="item">Напитки</li> </Link>
                  <Link to={'/pizza'}> <li className="item">Закуски</li> </Link>
                  <Link to={'/pizza'}> <li className="item">Комбо</li> </Link>
                  <Link to={'/pizza'}> <li className="item">Десерты</li> </Link>
                  <Link to={'/pizza'}> <li className="item">Соусы</li> </Link>
                  <li className="item">Другое <img src={down} alt="" /></li> 
                </ul>
                <div onClick={() => addKarzinka()} className="shopCard">
                    <img src={kazina} alt="" />
                    <p>{son2}</p>
                    <span>₽</span>
                </div>
            </header>
            <div className={karzinkaDiv}>
                <div className="karzinka">
                    <div className="karzinkaHeader">
                        <h1>Ваш заказ</h1>
                        <img onClick={() => Close()} src={x} alt="" />
                    </div>
                    <div className="products">
                        {
                            karzinka.map((add) => (
                               <KarzinkaPizza total={total} setTotal={setTotal} add={add}/> 
                            ))
                        }
                        
                    </div>
                    <div className="karzinkaFooter">
                        <h1>Итого: {total} ₽</h1>
                        <span>Оформить заказ</span>
                    </div>
                </div>
            </div>
        </div>
    )
}