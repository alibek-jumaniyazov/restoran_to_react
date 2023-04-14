export default function OnePizza({ item, kz ,addOn, openBox }) {
    return (
        <div className="OnePizza">
            {
                item.new && <p className="xit">{item.new}</p>
            }
            {
                item.xit && <p className="xit">{item.xit}</p>
            }
            <img src={item.img} alt="" />
            <div className="pizzaInfo">
                <p>{item.name}</p>
                <span>{item.info}</span>
                <div className="addBtn">
                    <a onClick={() => openBox(item.id, item.img, item.name, item.info, item.price, item.gramm)} className="btnPizza">Выбрать</a>
                <h3>от {item.price} ₽</h3>
            </div>
        </div>
        </div >
    )
}
                       
                    //     () =>addOn == true ?  kz( item.id, item.img, item.name, item.info, item.price, item.gramm)
                    //    :setDiv('add') 