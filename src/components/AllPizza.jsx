import { useRef, useState } from 'react'
import filterIcon from '../images/Group 93.svg'
import pizza1 from '../images/Rectangle 4.svg'
import OnePizza from './OnePizza'

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
                <button onClick={() => productADD()}>Add</button>
            </div>
        </div>
    )
}