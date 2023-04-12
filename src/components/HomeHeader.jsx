import location from '../images/Location.svg'
import user from '../images/Account.svg'
import x from '../images/Union.svg'
import kazina from '../images/Shopping bag.svg'
import LogoName from '../images/Group 152.svg'
import down from '../images/Arrow down.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function HomeHeader({ karzinka, }) {

    const [karzinkaDiv, setKarzinkADiv] = useState('allBox')

    function addKarzinka() {
        setKarzinkADiv('add')
        // body.classList.add('overfolw')
    }

    function Close() {
        setKarzinkADiv('allBox')
    }


    const [son, setSon] = useState(1)


    function Minus() {
        setSon(son - 1)
    }

    function Pilus() {
        setSon(son + 1)
    }

    return (
        <div className="HomeHeader">
            <nav>
                <div className="place">
                    <div className="locatio">
                        <img src={location} alt="" />
                        <p className='navP'>Москва</p>
                        <img src={down} alt="" />
                    </div>
                    <p className='navP'>Проверить адрес</p>
                    <div className="delivery">
                        <p className='navP'>Среднее время доставки*:</p>
                        <span>00:24:19</span>
                    </div>
                </div>
                <div className="user">
                    <p className='navP'>Время работы: с 11:00 до 23:00</p>
                    <div className="accaunt">
                        <img src={user} alt="" />
                        <p className='navP'>Войти в аккаунт</p>
                    </div>
                </div>
            </nav>
            <hr />
            <header>
                <Link to={"/"}>
                    <div className="logoName">
                        <img src={LogoName} alt="" />
                    </div>
                </Link>
                <div onClick={() => addKarzinka()} className="shopCard">
                    <img src={kazina} alt="" />
                    <p>0</p>
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
                                <div className="product">
                                    <img src={add.img} alt="" />
                                    <div className="productInfos">
                                        <div className="karzinkaInfo">
                                            <p>{add.name}</p>
                                            <span>{add.info}</span>
                                        </div>
                                        <div className="ProductPrice">
                                            <div className='productCounter'>
                                                <span onClick={() => Minus()}>-</span>  <p>{son}</p> <span onClick={() => Pilus()} >+</span>
                                            </div>
                                            <span>{`${add.price * son} ₽`}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

