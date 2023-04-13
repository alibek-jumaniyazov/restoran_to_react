import location from '../images/Location.svg'
import user from '../images/Account.svg'
import x from '../images/Union.svg'
import kazina from '../images/Shopping bag.svg'
import LogoName from '../images/Group 152.svg'
import down from '../images/Arrow down.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import KarzinkaPizza from './KarzinkaPizza'

export default function HomeHeader({ karzinka,son2 }) {
    const [total , setTotal] = useState( JSON.parse(localStorage.getItem('total')) || 0)

    localStorage.setItem('total', JSON.stringify(total))

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

