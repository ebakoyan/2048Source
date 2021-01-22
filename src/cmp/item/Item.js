import s from './Item.module.css'

export const Item = ({number}) => {
    if(number === 0)
    number = null
    let color = {background: "linear-gradient(to right, #4b6cb7, #182848)"}
    switch (number) {
        case 2:
            color = {background: "linear-gradient(to right, #fc354c, #0abfbc)"}
            break;
        case 4:
            color = {background: "linear-gradient(to right, #414d0b, #727a17)"}
            break;
        case 8:
            color = {background: "linear-gradient(to right, #e43a15, #e65245)"}
            break;
        case 16:
            color = {background: "linear-gradient(to right, #c04848, #480048)"}
            break;
        case 32:
            color = {background: "linear-gradient(to right, #5f2c82, #49a09d)"}
            break;
        case 64:
            color = {background: "linear-gradient(to right, #ec6f66, #f3a183)"}
            break;
        case 128:
            color = {background: "linear-gradient(to right, #7474bf, #348ac7)"}
            break;
        case 256:
            color = {background: "linear-gradient(to right, #16222a, #3a6073)"}
            break;
        case 512:
            color = {background: "linear-gradient(to right, #ff8008, #ffc837)"}
            break;
        case 1024:
            color = {background: "linear-gradient(to right, #1d976c, #93f9b9)"}
            break;
        case 2048:
            color = {background: "linear-gradient(to right, #eb3349, #f45c43)"}
            break;
        default:
            color = {background: "linear-gradient(to right, #4b6cb7, #182848)"}

    }
    return (
        <div style={color} className={s.item}>
            <h2>
                {number}
            </h2>
        </div>
    )
}
