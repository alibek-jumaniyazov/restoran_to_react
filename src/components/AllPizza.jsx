import { useRef, useState } from 'react'
import filterIcon from '../images/Group 93.svg'
import pizza1 from '../images/Rectangle 4.svg'
import pizza2 from '../images/Rectangle 4 (1).svg'
import OnePizza from './OnePizza'
import x from '../images/Cross.svg'
import sir from '../images/Group 83.svg'
export default function AllPizza({ sliceData, addProduct, son2, setSon2 }) {


    const [pizza, setPizza] = useState([
        {
            id: 1,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
            xit: "ХИТ",
            gramm: 400
        },
        {
            id: 2,
            img: pizza2,
            name: "EASY PEASY огуречный расколбас",
            info: "Курица, Лук, Перец Халапеньо...",
            price: 549,
            xit: "ХИТ",
            gramm: 400

        },
        {
            id: 3,
            img: pizza1,
            name: "EASY PEASY чикен а-ля хрен",
            info: "Курица, Лук, Соус Карбонара,...",
            price: 249,
            new: "NEW",
            gramm: 400
        },
        {
            id: 4,
            img: pizza1,
            name: "4 сезона",
            info: "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...",
            price: 630,
            new: "NEW",
            gramm: 400

        },
        {
            id: 5,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
            xit: "ХИТ",
            gramm: 400
        },
        {
            id: 6,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
            xit: "ХИТ",
            gramm: 400
        },
        {
            id: 7,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
            xit: "ХИТ",
            gramm: 400
        },
        {
            id: 8,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
            xit: "ХИТ",
            gramm: 400
        },
        {
            id: 9,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
            xit: "ХИТ",
            gramm: 400

        },
        {
            id: 10,
            img: pizza1,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
            xit: "ХИТ",
            gramm: 400

        },
        {
            id: 11,
            img: pizza1,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
            xit: "ХИТ",
            gramm: 400
        },
        {
            id: 12,
            img: pizza1,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
            xit: "ХИТ",
            gramm: 400
        },
        {
            id: 13,
            img: pizza1,
            name: "Чикен Сладкий Чили",
            info: "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...",
            price: 399,
            xit: "ХИТ",
            gramm: 400
        },

    ])
    const [pizzaCmm, setPizzaCmm] = useState('300px')
    const [div, setDiv] = useState('allBox')
    const [colorWithe1, setColor1] = useState('colorWith')
    const [colorWithe2, setColor2] = useState('div1BoxTitle')
    const [pizzaHamir, setPizzaHamir] = useState('0px')
    const [pizzaCm, setPizzaCm] = useState('0px')
    const [cmWithe1, setcmWithe1] = useState('cmWithe')
    const [cmWithe2, setcmWithe2] = useState('cmBlack')
    const [cmWithe3, setcmWithe3] = useState('cmBlack')
    const [tonke, setTonke] = useState('Традиционное')
    const [sm, setCm] = useState(20)


    function bgColor1() {
        setPizzaHamir('0px')
        setColor1('colorWith')
        setColor2('div1BoxTitle')
        setTonke('Традиционное')
    }


    function bgColor2() {
        setPizzaHamir('240px')
        setColor2('colorWith')
        setColor1('div1BoxTitle')
        setTonke('Тонкое')

    }

    function S1() {
        setPizzaCm('0px')
        setcmWithe1('cmWithe')
        setcmWithe2('cmBlack')
        setcmWithe3('cmBlack')
        setPizzaCmm('300px')
        setCm(20)
    }

    function S2() {
        setPizzaCm('160px')
        setcmWithe1('cmBlack')
        setcmWithe2('cmWithe')
        setcmWithe3('cmBlack')
        setPizzaCmm('400px')
        setCm(28)
    }

    function S3() {
        setPizzaCm('320px')
        setcmWithe1('cmBlack')
        setcmWithe2('cmBlack')
        setcmWithe3('cmWithe')
        setPizzaCmm('450px')
        setCm(33)
    }




    function Closed1() {
        setDiv('allBox')
    }






    const [PizzaOnclick, setPizzaOnclick] = useState([])

    function PizzaOonclick(id, img, name, price, gramm) {
        setPizzaOnclick([
            {
                id: id,
                img: img,
                name: name,
                price: price,
                gramm: gramm
            }
        ])
    }

    function openBox(id, img, name, info, price, gramm){
        setDiv('add')
        PizzaOonclick(id, img, name, price, gramm)
        
    }

    let addOn = false
    function productADD(id,name, img, price,) {
        addOn = true
        setDiv('allBox')
        {
            addOn == true ? 
            addProduct(id, img, name, tonke , sm, price,)
            :
            addProduct()
        }
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
                            <OnePizza setDiv={setDiv} addOn={addOn} openBox={openBox} item={item} />
                        ))
                        :
                        pizza.map((item, index) => (
                            <OnePizza setDiv={setDiv} addOn={addOn} openBox={openBox} item={item} />
                        ))
                }
            </div>
            <div className={div}>
                <div className="aa">
                    {
                        PizzaOnclick.map((item) => (
                            <div className="productAddToCard">
                                <div className="kardImgSize">
                                    <img style={{ width: `${pizzaCmm}` }} className='pizzaBig' src={item.img} alt="" />
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
                                        <p onClick={() => bgColor1()} className={`${colorWithe1}`}>Традиционное</p>
                                        <p onClick={() => bgColor2()} className={`${colorWithe2}`}>Тонкое</p>
                                        <div className="bgC" style={{ left: `${pizzaHamir}` }}>

                                        </div>
                                    </div>
                                    <div className="pizzaSize">
                                        <p className={`${cmWithe1}`} onClick={() => S1()}>20 см</p>
                                        <p className={`${cmWithe2}`} onClick={() => S2()}>28 см</p>
                                        <p className={`${cmWithe3}`} onClick={() => S3()}>33 см</p>
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
                                        <div className="priceGramm">
                                            <p>Итого: {item.price} ₽</p>
                                            <span className='gramm'>{item.gramm} г</span>
                                        </div>

                                        <span className='addProductbtn' onClick={() => productADD(item.id, item.name, item.img , item.price)}>Add</span>
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