
import { useState } from "react";
import ZakazHeader from "../components/ZakazHeader";
import ZakazPizza from "../components/ZakazPizza";
import PromoBtn from "../images/Vector (2).svg"

export default function Zakaz({ zakaz, setZakaz, setTotal, total }) {



    return (
        <div className="Zakaz">
            <ZakazHeader zakaz={zakaz} setTotal={setTotal} total={total} />
            <div className="zakazContainer">
                <div className="zakazs">
                    <h1 className="vashZakaz">Ваш заказ</h1>
                    <div className="zakazProduct">
                        {
                            zakaz.map((add) => (
                                <ZakazPizza  setTotal={setTotal} zakaz={zakaz} setZakaz={setZakaz} add={add} />
                            ))
                        }
                    </div>
                    <div className="allPrice">
                        <div className="Promo">
                            <input type="text" placeholder="Промокод"/>
                            <span className="promoBtn"><img src={PromoBtn} alt="" /></span>
                        </div>
                        <p className="price">
                            Итого: {total} ₽
                        </p>
                    </div>
                </div>
                <div className="addKarzinkazakaz">
                    <p className="dobovizZakaz" >Добавить к заказу?</p>
                    <div className="Karusel">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}