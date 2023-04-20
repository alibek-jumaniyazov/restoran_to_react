export default function OnePizza({ item,   openBox }) {
    return (
        <div className="OnePizza">
            <p className="xit">{item.xit}</p>
            <img src={item.img} alt="" />
            <div className="pizzaInfo">
                <p>{item.name}</p>
                <span>{item.info}</span>
                <div className="addBtn">
                    <a onClick={() => openBox(item.id, item.img, item.name, item.info, item.price,item.xit, item.gramm ,item.count)} className="btnPizza">Выбрать</a>
                <h3>от {item.price} ₽</h3>
            </div>
        </div>
        </div >
    )
}
                       
                    //     () =>addOn == true ?  kz( item.id, item.img, item.name, item.info, item.price, item.gramm)
                    //    :setDiv('add') 