import { useRef, useState } from 'react'
import filterIcon from '../images/Group 93.svg'
import pizza1 from '../images/Rectangle 4.svg'
import pizza2 from '../images/Rectangle 4 (1).svg'
import OnePizza from './OnePizza'
import x from '../images/Cross.svg'
import sir from '../images/Group 83.svg'
export default function AllPizza({ sliceData, addProduct , son2 , setSon2 }) {
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
            img: pizza2,
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
    const [colorWithe1, setColor1] = useState('colorWith')
    const [colorWithe2, setColor2] = useState('div1BoxTitle')
    const [pizzaHamir, setPizzaHamir] = useState('0px')
    const [pizzaCm, setPizzaCm] = useState('0px')
    const [cmWithe1, setcmWithe1] = useState('cmWithe')
    const [cmWithe2, setcmWithe2] = useState('cmBlack')
    const [cmWithe3, setcmWithe3] = useState('cmBlack')
    const [sm , setCm] = useState('20 cm')

    function bgColor1() {
        setPizzaHamir('0px')
        setColor1('colorWith')
        setColor2('div1BoxTitle')
    }


    function bgColor2() {
        setPizzaHamir('240px')
        setColor2('colorWith')
        setColor1('div1BoxTitle')
    }


    function S1() {
        setPizzaCm('0px')
        setcmWithe1('cmWithe')
        setcmWithe2('cmBlack')
        setcmWithe3('cmBlack')
        setPizzaCmm('300px')
        setCm('20 cm')
    }

    function S2() {
        setPizzaCm('160px')
        setcmWithe1('cmBlack')
        setcmWithe2('cmWithe')  
        setcmWithe3('cmBlack')
        setPizzaCmm('350px')
        setCm('28 cm')
    }

    function S3() {
        setPizzaCm('320px')
        setcmWithe1('cmBlack')
        setcmWithe2('cmBlack')
        setcmWithe3('cmWithe')
        setPizzaCmm('450px')
        setCm('33 cm')
    }


    const [div, setDiv] = useState('allBox')


    function kz(id, img, name, info, price) {
        setDiv('add')
        if (colorWithe1 == 'colorWith') {
            addProduct(id, img, name, a2, sm,  price, )
        }
        if (colorWithe2 == 'colorWith') {
            addProduct(id, img, name, a1, sm , price ,)
        }




        setSon2(son2 + 1)
        // if (cmWithe3 == 'cmWithe') {
        //     addProduct(id, img, name, a2,t1, price)
        // }
        // if (cmWithe3 == 'cmWithe') {    
        //     addProduct(id, img, name, a1,t2, price)
        // }
        // if (cmWithe3 == 'cmWithe') {
        //     addProduct(id, img, name, a1, t3, price)
        // }

        PizzaOonclick(id, img, name)

    }

    const a1 = 'Традиционное'
    const a2 = 'Тонкое'

    const t1 = '20 см'
    const t2 = '28 см'
    const t3 = '33 см'



    function Closed1() {
        setDiv('allBox')
    }


    function productADD() {
        setDiv('allBox')
    }

    const [PizzaOnclick, setPizzaOnclick] = useState([])

    function PizzaOonclick(id, img, name) {
        setPizzaOnclick([
            {
                id: id,
                img: img,
                name: name
            }
        ])
    }

   
    const [pizzaCmm , setPizzaCmm] = useState('300px')


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
                    {
                        PizzaOnclick.map((item) => (
                            <div className="productAddToCard">
                                <div className="kardImgSize">
                                    <img style={{width:`${pizzaCmm}`}} className='pizzaBig' src={item.img} alt="" />
                                </div>
                                
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
                                        <p onClick={() => bgColor1()} className={`${colorWithe1}`}>{a1}</p>
                                        <p onClick={() => bgColor2()} className={`${colorWithe2}`}>{a2}</p>
                                        <div className="bgC" style={{ left: `${pizzaHamir}` }}>

                                        </div>
                                    </div>
                                    <div className="pizzaSize">
                                        <p className={`${cmWithe1}`} onClick={() => S1()}>{t1}</p>
                                        <p className={`${cmWithe2}`} onClick={() => S2()}>{t2}</p>
                                        <p className={`${cmWithe3}`} onClick={() => S3()}>{t3}</p>
                                        <div className="bgS" style={{ left: `${pizzaCm}` }}>

                                        </div>
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
                        ))

                    }

                    <img onClick={() => Closed1()} src={x} alt="" />
                </div>


            </div>
        </div>
    )
}