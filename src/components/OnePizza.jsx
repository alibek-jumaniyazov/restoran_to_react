export default function OnePizza({ item }) {
    return (
        <div className="OnePizza">
            {/* <p className="xit">{item.new}</p>
            <p className="xit">{item.xit}</p> */}
            <img src={item.img} alt="" />
            <div className="pizzaInfo">
                <p>{item.name}</p>
                <span>{item.info}</span>
                <div className="addBtn">
                    <a href="" className="btnPizza">Выбрать</a>
                    <h3>от {item.price} ₽</h3>
                </div>
            </div>
        </div>
    )
}