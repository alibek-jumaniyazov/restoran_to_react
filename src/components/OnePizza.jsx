export default function OnePizza({ item, kz ,addOn, openBox }) {
    return (
        <div className="OnePizza">
            <p className="xit">{item.xit}</p>
            <img src={item.image} alt="" />
            <div className="pizzaInfo">
                <p>{item.name}</p>
                <span>{item.description}</span>
                <div className="addBtn">
                    <a onClick={() => openBox(item.id, item.image, item.name, item.description, item.price, item.gramm)} className="btnPizza">Выбрать</a>
                <h3>от {item.price} ₽</h3>
            </div>
        </div>
        </div >
    )
}
                       
                    //     () =>addOn == true ?  kz( item.id, item.image, item.name, item.info, item.price, item.gramm)
                    //    :setDiv('add') 