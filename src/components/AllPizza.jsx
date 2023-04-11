import { useState } from 'react'
import filterIcon from '../images/Group 93.svg'
import pizza1 from '../images/Rectangle 4.svg'
import OnePizza from './OnePizza'

export default function AllPizza() {

    const [pizza , setPizza] = useState([
        {
            img:pizza1,
            name:"Чикен Сладкий Чили",
            info:"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price:399,
            xit:"ХИТ"
        },
        {
            img:pizza1,
            name:"Чикен Сладкий Чили",
            info:"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price:399,
            xit:"ХИТ"

        },
        {
            img:pizza1,
            name:"Чикен Сладкий Чили",
            info:"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price:399,
            new:"NEW"

        },
        {
            img:pizza1,
            name:"Чикен Сладкий Чили",
            info:"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price:399,
            new:"NEW"

        },
        {
            img:pizza1,
            name:"Чикен Сладкий Чили",
            info:"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price:399,
        },
        {
            img:pizza1,
            name:"Чикен Сладкий Чили",
            info:"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price:399,
        },
        {
            img:pizza1,
            name:"Чикен Сладкий Чили",
            info:"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price:399,
        },
        {
            img:pizza1,
            name:"Чикен Сладкий Чили",
            info:"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price:399,
            xit:"ХИТ"
        },
        {
            img:pizza1,
            name:"Чикен Сладкий Чили",
            info:"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price:399,
            xit:"ХИТ"

        },
        {
            img:pizza1,
            name:"Чикен Сладкий Чили",
            info:"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price:399,
            new:"NEW"

        },
        {
            img:pizza1,
            name:"Чикен Сладкий Чили",
            info:"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price:399,
            new:"NEW"

        },
        {
            img:pizza1,
            name:"Чикен Сладкий Чили",
            info:"Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price:399,
        },

    ])

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
                    pizza.map((item) =>(
                        <OnePizza item={item}/>
                    ))
                }
            </div>
        </div>
    )
}