import filterIcon from '../images/Group 93.svg'

export default function AllPizza() {
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
                
            </div>
        </div>
    )
}