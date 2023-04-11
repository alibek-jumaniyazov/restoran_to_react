import aksiya from "../images/Group 96.svg"

export default function Box({item}){
    return(
        <div className="Box">
            <img src={item.img} alt="" />
            <p className="boxName">{item.name}</p>
        </div>
    )
}