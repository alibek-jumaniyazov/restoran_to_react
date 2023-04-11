import LogoName from '../images/Group 152.svg'
import kazina from '../images/Shopping bag.svg'
import down from '../images/Arrow down.svg'



export default function Header() {
    return (
        <div className="HomeHeader">
        <header>
            <div className="logoName">
                <img src={LogoName} alt="" />
            </div>
            <ul className="list">
                <li className="item">Акции</li>
                <li className="item">Пицца</li>
                <li className="item">Суши</li>
                <li className="item">Напитки</li>
                <li className="item">Закуски</li>
                <li className="item">Комбо</li>
                <li className="item">Десерты</li>
                <li className="item">Соусы</li>
                <li className="item">Другое <img src={down} alt="" /></li>
            </ul>
            <div className="shopCard">
                <img src={kazina} alt="" />
                <p>0</p>
                <span>₽</span>
            </div>
        </header>
        </div>
    )
}