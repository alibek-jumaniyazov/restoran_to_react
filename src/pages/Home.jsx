import { useState } from "react";
import Box from "../components/Box";
import HomeHeader from "../components/HomeHeader";
import aksiya from "../images/Group 96.svg"
import pizza from "../images/Pizza.svg"
import sushi from "../images/Sushi.svg"
import cola from "../images/Drink.svg"
import kartoshka from "../images/Snacks.svg"
import kombo from "../images/Combo.svg"
import disert from "../images/Dessert.svg"
import sous from "../images/Sauce.svg"
import iconbg2 from "../images/Group 737.svg"
import iconbg1 from "../images/Group 738.svg"
import Sale from "../components/Sale";
import Location from "../components/Location";
import AllPizza from "../components/AllPizza";


export default function Home() {
  const [box, setBox] = useState([
    {
      img: aksiya,
      name: "Акции",
      link:'/pizza'
    },
    {
      img: pizza,
      name: "Пицца",
      link:'/pizza'
    }, {
      img: sushi,
      name: "Суши",
      link:'/pizza'
    }, {
      img: cola,
      name: "Напитки",
      link:'/pizza'
    }, {
      img: kartoshka,
      name: "Закуски",
      link:'/pizza'
    }, {
      img: kombo,
      name: "Комбо",
      link:'/pizza'
    }, {
      img: disert,
      name: "Десерты",
      link:'/pizza'
    }, {
      img: sous,
      name: "Соусы",
      link:'/pizza'
    },
  ])


  const [Salebox, setSale] = useState([
    {
      img: iconbg1,
      name: "3 средние пиццы от 999 рублей"
    },
    {
      img: iconbg2,
      name: "Кэшбек 10% на самовывоз (доставка)"
    }, {
      img: iconbg1,
      name: "3 средние пиццы от 999 рублей"
    }, {
      img: iconbg2,
      name: "Кэшбек 10% на самовывоз (доставка)"
    }, 
  ])

  

  return (
    <div className="Home">
      <HomeHeader />
      <div className="boxes">
        {
          box.map((item) => (
            <Box item={item}/>
          ))
        }
      </div>
        <div className="saleBox">
          {
            Salebox.map((add) => (
              <Sale add={add} />
            ))
          }
        </div>
        <Location/>
        <AllPizza sliceData={8} />
    </div>
  )
}

