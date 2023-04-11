import location from '../images/Location.svg'
import user from '../images/Account.svg'
import logo from '../images/Group 2.svg'
import kazina from '../images/Shopping bag.svg'
import LogoName from '../images/Group 152.svg'
import down from '../images/Arrow down.svg'

export default function HomeHeader() {
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
                <div className="logoName">
                    <img src={LogoName} alt="" />
                </div>
                <div className="shopCard">
                    <img src={kazina} alt="" />
                    <p>0</p>
                    <span>₽</span>
                </div>
            </header>
        </div>
    )
}

