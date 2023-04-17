import Header from "./Header";
import location from '../images/Location.svg'
import user from '../images/Account.svg'
import down from '../images/Arrow down.svg'

export default function ZakazHeader() {
    


    

    return (
        <div className="ZakazHeader">
            <nav className="navZakaz">
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
                <Header/>

        </div>


    )
}