
import { useState } from "react";
import ZakazHeader from "../components/ZakazHeader";
import ZakazPizza from "../components/ZakazPizza";

export default function Zakaz({zakaz , setZakaz, setTotal , total}) {



    return (
        <div className="Zakaz">
            <ZakazHeader zakaz={zakaz} setTotal={setTotal} total={total}/>
            <div className="zakazContainer">
                <h1 className="vashZakaz">Ваш заказ</h1>
                <div className="zakazProduct">
                    {
                        zakaz.map((add) => (
                            <ZakazPizza setTotal={setTotal} zakaz={zakaz} setZakaz={setZakaz} add={add}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}