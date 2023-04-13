import { useRef, useState } from 'react'
import filterIcon from '../images/Group 93.svg'
import pizza1 from '../images/Rectangle 4.svg'
import OnePizza from './OnePizza'
import x from '../images/Cross.svg'
import sir from '../images/Group 83.svg'
export default function AllPizza({ sliceData, addProduct }) {
    console.log(sliceData);

    const [pizza, setPizza] = useState([
        {
            id: 1,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
            xit: "ХИТ"
        },
        {
            id: 2,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
            xit: "ХИТ"

        },
        {
            id: 3,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
            new: "NEW"

        },
        {
            id: 4,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
            new: "NEW"

        },
        {
            id: 5,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
        },
        {
            id: 6,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
        },
        {
            id: 7,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
        },
        {
            id: 8,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
            xit: "ХИТ"
        },
        {
            id: 9,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
            xit: "ХИТ"

        },
        {
            id: 10,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
            new: "NEW"

        },
        {
            id: 11,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
            new: "NEW"

        },
        {
            id: 12,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
        },
        {
            id: 13,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
        },

    ])


    const [div, setDiv] = useState('allBox')

    function kz(id, img, name, info, price) {
        setDiv('add')
        addProduct(id, img, name, info, price)

    }

    function Closed1() {
        setDiv('allBox')
    }

    function Closed2() {
        setDiv('allBox')
    }

    function productADD() {
        setDiv('allBox')
    }

    return (
        <div className="AllPizza">
            <div className="PizzaHeader">
                <h1>Пицца</h1>
                <a className="filter">
                    <img src={filterIcon} alt="" />
                    <p>Фильтры</p>
                </a>
            </div>
            <div className="Pizzas">

                {
                    sliceData ?
                        pizza.slice(0, sliceData).map((item, index) => (
                            <OnePizza kz={kz} item={item} />
                        ))
                        :
                        pizza.map((item, index) => (
                            <OnePizza kz={kz} item={item} />
                        ))
                }
            </div>
            <div className={div}>
                <div className="aa">
                    <div className="productAddToCard">
                        <img className='pizzaBig' src={pizza1} alt="" />
                        <div className="addCardInfo">
                            <p>Пепперони по-деревенски</p>
                            <div className="savzavot">
                                <div className="savzavotBox">
                                    <div className="savzavotBorder">
                                        <img src={sir} alt="" />
                                    </div>

                                    <p>Моцарелла</p>
                                </div>
                                <div className="savzavotBox">
                                    <div className="savzavotBorder">
                                        <img src={sir} alt="" />
                                    </div>

                                    <p>Моцарелла</p>
                                </div>
                                <div className="savzavotBox">
                                    <div className="savzavotBorder">
                                        <img src={sir} alt="" />
                                    </div>

                                    <p>Моцарелла</p>
                                </div>
                                <div className="savzavotBox">
                                    <div className="savzavotBorder">
                                        <img src={sir} alt="" />
                                    </div>

                                    <p>Моцарелла</p>
                                </div>
                            </div>
                            <div className="div1Box">
                                <p>Традиционное</p>
                                <p>Тонкое</p>
                            </div>
                            <div className="pizzaSize">
                                <p>20 см</p>
                                <p>28 см</p>
                                <p>33 см</p>
                            </div>
                            <div className="savzavot">
                                <div className="savzavotBox">
                                    <div className="savzavotBorder">
                                        <img src={sir} alt="" />
                                    </div>
                                    <p>Моцарелла</p>
                                    <div className="priceBox">59 ₽</div>
                                </div>
                                <div className="savzavotBox">
                                    <div className="savzavotBorder">
                                        <img src={sir} alt="" />
                                    </div>
                                    <p>Моцарелла</p>
                                    <div className="priceBox">59 ₽</div>
                                </div>
                                <div className="savzavotBox">
                                    <div className="savzavotBorder">
                                        <img src={sir} alt="" />
                                    </div>
                                    <p>Моцарелла</p>
                                    <div className="priceBox">59 ₽</div>
                                </div>
                                <div className="savzavotBox">
                                    <div className="savzavotBorder">
                                        <img src={sir} alt="" />
                                    </div>
                                    <p>Моцарелла</p>
                                    <div className="priceBox">59 ₽</div>
                                </div>
                            </div>
                            <div className="priceAdnAdd">
                                <p>Итого: 379 ₽</p>
                                <span onClick={() => productADD()}>Add</span>
                            </div>
                        </div>
                    </div>
                    <img onClick={() => Closed1()} src={x} alt="" />
                </div>


            </div>
        </div>
    )
}