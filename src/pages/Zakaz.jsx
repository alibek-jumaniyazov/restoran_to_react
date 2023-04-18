
import { useState } from "react";
import ZakazHeader from "../components/ZakazHeader";
import ZakazPizza from "../components/ZakazPizza";

export default function Zakaz({zakaz}) {



    return (
        <div className="Zakaz">
            <ZakazHeader/>
            <div className="zakazContainer">
                <h1 className="vashZakaz">Ваш заказ</h1>
                <div className="zakazProduct">
                    {
                        zakaz.map((add) => (
                            <ZakazPizza add={add}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}