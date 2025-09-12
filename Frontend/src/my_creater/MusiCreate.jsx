import React, { useState, useEffect } from "react"
import CardMusic from "./helpers";

export default function MusiCreate() {

    const [music, SetMusic] = useState([])


    useEffect(() => {
        fetch("http://localhost:5000/api/Select") // sua rota no backend
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Erro ao buscar dados");
                }
                return res.json();
            }).then((data) => {
                SetMusic(data); // salva a lista toda
            })
    }, [])

    return (
        <div>
            {music.map((music, index) =>
                CardMusic(music[4], music[1], music[0], music[6], index)
            )}
        </div>
    )
}