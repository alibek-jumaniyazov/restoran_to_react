export default function Sale({ add }) {
    return (
        <div className="Sale">
            <img src={add.img} alt="" />
            <p>{add.name}</p>
        </div>
    )
}