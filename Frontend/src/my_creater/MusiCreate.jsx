import React, { useState, useEffect } from "react"
import { CardMusic, MusicPlayerOn } from "./helpers";

export default function MusiCreate() {
    const [music, SetMusic] = useState([])
    const [selectedMusic, setSelectedMusic] = useState(null)
    const [showPlayer, setShowPlayer] = useState(false)

    useEffect(() => {
        fetch("http://localhost:5000/api/Select")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Erro ao buscar dados");
                }
                return res.json();
            }).then((data) => {
                SetMusic(data);
            })
    }, [])

    const SelectMusic = (item) => {
        setSelectedMusic(item)
        setShowPlayer(true)
    }

    return (
        <div>
            <div id="Musicard" onClick={() => setShowPlayer(!showPlayer)}>
                {music.map((music, index) =>
                    <div key={index} onClick={() => SelectMusic(music)}>
                        <CardMusic Id={index}
                            Thumb={music[4]}
                            musicName={music[1]}
                            Creater={music[0]}
                            Time={music[6]} />
                    </div>
                )}
            </div>
            <div>{showPlayer && selectedMusic && (
                <MusicPlayerOn Id={parseInt(selectedMusic[0]) - 1}/>
            )}
            </div>
        </div>
    )
}