import React,{useState} from "react"
import CardMusic from "./helpers";

export default function MusiCreate() {
    const [music,SetMusic] = useState({
        "Thumb":"https://i.pinimg.com/736x/69/e9/1c/69e91c687144aec896a9e0e6241afd9d.jpg",
        "Creater":"Cor dos olhos",
        "MusicName":"Carne Viva",
        "Tempo":"5:00"
    })

    console.log(music);
    return(
        <div>
            {
                CardMusic(music["Thumb"],music["MusicName"],music["Creater"],music["Tempo"])
            }
        </div>
    )
}