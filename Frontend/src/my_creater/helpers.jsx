import React, { useState, useEffect } from "react";
import MusicProgressBar from '../components/MusicProgressBar.jsx';

export function CardMusic({Thumb, musicName, Creater, Duration}) {
  return (
    <div id="Card_Music">
      <div className="card bg-secondary border-0 music-card">
        <div className="card-img-top position-relative" id="Card_Music_Thumb" style={{ backgroundImage: `url(${Thumb})`, height: "200px" }}></div>
        <div className="card-body">
          <h6 className="card-title mb-1">{Creater}</h6>
          <p className="card-text text-muted small">{musicName}</p>
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">{Duration}</small>
            <div>
              <button className="btn btn-sm btn-outline-light me-1">
                <i className="fas fa-heart"></i>
              </button>
              <button className="btn btn-sm btn-outline-light">
                <i className="fas fa-share"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SidebarItens({ Link, classNameIcon, IcoName }) {
  return (
    <div>
      <a href={Link} className="list-group-item list-group-item-action bg-transparent text-light border-secondary">
        <i className={classNameIcon}></i>{IcoName}
      </a>
    </div>
  )
}

export function MusicPlayerOn(props) {
  const [musiChoice, SetmusiChoice] = useState({})
  const [Idmusic, SetIdmusic] = useState(props.Id)
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, SetisPlaying] = useState(false)
  const [isRandom, SetisRandom] = useState(false)
  const [isLength, SetisLength] = useState(0)
  const [isRepeat, SetisRepeat] = useState(false)
  const Audio = document.getElementById("Audio")

  const handleSeek = (newTime) => {
    setCurrentTime(newTime);
    // Aqui você atualizaria o tempo da sua música
    Audio.currentTime = newTime;
  };

  useEffect(() => {
    
    const FunChoice = (Id) => {
      fetch("http://localhost:5000/api/Select").then((response) => response.json().then((dados) => {

        let Idnew = dados.findIndex(item => item[0] === Id)        
        
        SetisLength(dados.length)
        setDuration(dados[Idnew][6])        
        SetmusiChoice({
          "Id": dados[Idnew][0],
          "Nome": dados[Idnew][1],
          "Thumb": dados[Idnew][4],
          "Data": dados[Idnew][3],
          "MusicFile": String(dados[Idnew][1]).replace(/[\\\/\:\*\?\"\<\>\|]/gi, '') // Retira caracteres inválidos do nome do arquivo
        })
      }))
    }
    FunChoice(Idmusic)    
  }, [Idmusic])

  // Fazer a Barra de Progresso Funcionar

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  },[]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    SetisPlaying(!isPlaying)

    if (isPlaying) {
      document.getElementById("Audio").play()
    } else {
      document.getElementById("Audio").pause()
    }
  };
  const toggleRandom = () => {
    SetisRandom(!isRandom)
    SetIdmusic(Math.floor(Math.random() * isLength))
  };

  const toggleRepeat = () => { };

  // Antes 
  const handlePrevious = () => { SetIdmusic(prevId => prevId -= 1) };

  // Depois
  const handleNext = () => { SetIdmusic(prevId => prevId += 1) };



  const handleVolumeChange = (e) => { };

  return (
    <div id="Body_Player" className="bg-dark text-light min-vh-100 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div >
            <div >
              <div className="card-body p-5">
                {/* Thumbnail da Música */}
                <div className="text-center mb-4">
                  <div className="music-thumbnail-large bg-gradient-info d-flex align-items-center justify-content-center mx-auto"
                    style={{ width: '300px', height: '240px', borderRadius: '20px' }}>
                    {musiChoice["Thumb"] ? (
                      <img
                        src={musiChoice["Thumb"]}
                        className="w-100 h-100 object-fit-cover"
                        style={{ borderRadius: '20px' }}
                      />
                    ) : (
                      <i className="fas fa-music fa-5x text-white opacity-75"></i>
                    )}
                  </div>
                </div>
                {/* Informações da Música */}
                <div className="text-center mb-4">
                  <h3 className="mb-2 fw-bold">{musiChoice["Nome"]}</h3>
                  <h5 className="text-muted mb-1">{musiChoice["Data"]}</h5>
                  <p className="text-muted small">Album</p>
                </div>

                {/* Barra de Progresso */}
                <div className="mb-8">

                  {/* Aqui vai ficar a barra de Progresso */}
                  <MusicProgressBar
                    currentTime={currentTime}
                    duration={duration}
                    onSeek={handleSeek} />
                  <audio id="Audio" src={`http://localhost:5000/musicPlay/${musiChoice["MusicFile"]}.mp3`} autoPlay></audio>
                </div>

                {/* Controles Principais */}
                <div className="d-flex justify-content-center align-items-center mb-4" id="ControlesPlayer">

                  {/* Botão Random */}
                  <button
                    className={`btn btn-lg me-3 ${isRandom ? 'btn-primary' : 'btn-outline-light'}`}
                    onClick={toggleRandom}
                    title="Aleatório"
                  >
                    <i className="fas fa-random"></i>
                  </button>

                  {/* Botão Anterior */}
                  <button
                    className="btn btn-outline-light btn-lg me-3"
                    onClick={handlePrevious}
                    title="Música Anterior"
                  >
                    <i className="fas fa-step-backward"></i>
                  </button>

                  {/* Botão Play/Pause */}
                  <button
                    className={`btn btn-primary btn-lg rounded-circle me-3`}
                    onClick={togglePlay}
                    style={{ width: '8vh', height: '8vh' }}
                    title={isPlaying ? 'Pausar' : 'Reproduzir'}
                  >
                    <i className={`fas ${isPlaying ? 'fa-play' : 'fa-pause'} fa-2x`}></i>
                  </button>

                  {/* Botão Próxima */}
                  <button
                    className="btn btn-outline-light btn-lg me-3"
                    onClick={handleNext}
                    title="Próxima Música"
                  >
                    <i className="fas fa-step-forward"></i>
                  </button>

                  {/* Botão Repetir */}
                  <button
                    className={`btn btn-lg ${isRepeat ? 'btn-primary' : 'btn-outline-light'}`}
                    onClick={toggleRepeat}
                    title="Repetir"
                  >
                    <i className="fas fa-redo"></i>
                  </button>

                </div>

                {/* Controles Secundários */}
                <div className="row align-items-center">

                  {/* Botão Favorito */}
                  <div className="col-2">
                    <button className="btn btn-outline-light">
                      <i className="fas fa-heart"></i>
                    </button>
                  </div>

                  {/* Controle de Volume */}
                  <div className="col-8">
                    <div className="d-flex align-items-center">
                      <i className="fas fa-volume-down text-muted me-2"></i>
                      <input
                        type="range"
                        className="form-range flex-grow-1"
                        min="0"
                        max="100"
                        onChange={handleVolumeChange}
                      />
                      <i className="fas fa-volume-up text-muted ms-2"></i>
                    </div>
                  </div>

                  {/* Botão Playlist */}
                  <div className="col-2 text-end">
                    <button className="btn btn-outline-light">
                      <i className="fas fa-list"></i>
                    </button>
                  </div>

                </div>

                {/* Botões de Ação Adicionais */}
                <div className="d-flex justify-content-center mt-4">
                  <button className="btn btn-outline-light me-2" title="Compartilhar">
                    <i className="fas fa-share me-1"></i>
                    Compartilhar
                  </button>
                  <button className="btn btn-outline-light" title="Baixar">
                    <i className="fas fa-download me-1"></i>
                    Baixar
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}