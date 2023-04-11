import { Link } from "react-router-dom"
import aksiya from "../images/Group 96.svg"

export default function Box({ item }) {
    return (
        <Link to={item.link}><div className="Box">
            <img src={item.img} alt="" />
            <p className="boxName">{item.name}</p>
        </div>
        </Link>
    )
}