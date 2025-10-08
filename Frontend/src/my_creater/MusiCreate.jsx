import React, { useState, useEffect } from "react"
import { CardMusic, MusicPlayerOn } from "./helpers";
import {Porta} from "../components/Global";


export default function MusiCreate() {
    const [music, SetMusic] = useState([])
    const [selectedMusic, setSelectedMusic] = useState(null)
    const [showPlayer, setShowPlayer] = useState(false)
    
    const port = Porta();        

    useEffect(() => {
        fetch(`http://localhost:${port}/api/Select`)
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
        <div id="MusiCreate" className="d-flex flex-column align-items-center">
            <div id="Musicard" onClick={() => setShowPlayer(!showPlayer)}>
                {music.map((music, index) =>
                    <div key={index} onClick={() => SelectMusic(music)}>
                        <CardMusic Id={music[0]}
                            Thumb={music[4]}
                            musicName={music[1]}
                            Creater={music[0]}
                            Duration={music[6]} />
                    </div>
                )}
            </div>
            <div>{showPlayer && selectedMusic && (
                <MusicPlayerOn Id={parseInt(selectedMusic[0])}/>
            )}
            </div>
        </div>
    )
}