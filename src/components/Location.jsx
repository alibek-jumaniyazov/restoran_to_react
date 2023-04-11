import location from '../images/Location.svg'

export default function Location(){
    return(
        <div className="Location">
            <p>Проверить адрес доставки </p>
            <div className="locationInput">
                <img src={location} alt="" />
                <input type="text" name="" id="" placeholder="Адрес" />
            </div>
            <a  className="Location_btn">Проверить</a>
        </div>
    )
}