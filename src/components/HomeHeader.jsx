export default function HomeHeader() {
    return (
        <div className="HomeHeader">
            <nav>
                <div className="place">
                    <div className="locatio">
                        <img src="" alt="" />
                        <p>Москва</p>
                    </div>
                    <p>Проверить адрес</p>
                    <div className="delivery">
                        <p>Среднее время доставки*:</p>
                        <span>00:24:19</span>
                    </div>
                </div>
                <div className="user">
                    <p className="workingTime">Время работы: с 11:00 до 23:00</p>
                    <div className="accaunt">
                        <img src="" alt="" />
                        <p>Войти в аккаунт</p>
                    </div>
                </div>
            </nav>
            <header>
                <div className="logoName">
                    <img src="" alt="" />
                    <p> Пицца</p>
                </div>
                <div className="shopCard">
                    <img src="" alt="" />
                    <p>0</p>
                    <span>₽</span>
                </div>
            </header>
        </div>
    )
}

