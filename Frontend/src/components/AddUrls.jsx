import React, { useEffect, useState } from 'react';

const AddUrls = () => {
  const [generos, setGeneros] = useState([]);
  const [formData, setFormData] = useState({
    musicUrl: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    var genre = document.getElementById("genre");
    fetch("http://localhost:5000/api/SelectGenero")
    .then((res) => res.json())
    .then((dados) => {
      setGeneros(dados)
    })
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resposta = await fetch("http://localhost:5000/api/Download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: formData.musicUrl }),
    });
    const data = await resposta.json();
    alert(data.message); // Agora vai funcionar
  };

  const handleCancel = () => {
    setFormData({
      musicUrl: ''
    });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">
              <i className="fas fa-plus-circle me-3 text-primary"></i>
              Adicionar URLs de Música
            </h1>
            <p className="lead text-muted">
              Adicione links do YouTube, Spotify ou outras plataformas para expandir sua biblioteca musical
            </p>
          </div>

          {/* Add URL Form */}
          <div className="card bg-secondary border-0 mb-4">
            <div className="card-header bg-dark border-0">
              <h4 className="mb-0">
                <i className="fas fa-link me-2"></i>Nova URL
              </h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="musicUrl" className="form-label">URL da Música</label>
                  <div className="input-group">
                    <span className="input-group-text bg-dark border-secondary text-light">
                      <i className="fas fa-link"></i>
                    </span>
                    <input
                      type="url"
                      className="form-control bg-dark border-secondary text-light"
                      id="musicUrl"
                      name="musicUrl"
                      value={formData.musicUrl}
                      onChange={handleInputChange}
                      placeholder="https://www.youtube.com/watch?v=..."
                    />
                  </div>
                  <div className="form-text text-muted">
                    Suportamos YouTube, Spotify, SoundCloud e outras plataformas
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="songTitle" className="form-label">Título da Música</label>
                    <input
                      type="text"
                      className="form-control bg-dark border-secondary text-light"
                      id="songTitle"
                      name="songTitle"
                      value={formData.songTitle}
                      onChange={handleInputChange}
                      placeholder="Nome da música"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="artistName" className="form-label">Artista</label>
                    <input
                      type="text"
                      className="form-control bg-dark border-secondary text-light"
                      id="artistName"
                      name="artistName"
                      value={formData.artistName}
                      onChange={handleInputChange}
                      placeholder="Nome do artista"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="albumName" className="form-label">Álbum (Opcional)</label>
                    <input
                      type="text"
                      className="form-control bg-dark border-secondary text-light"
                      id="albumName"
                      name="albumName"
                      value={formData.albumName}
                      onChange={handleInputChange}
                      placeholder="Nome do álbum"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="genre" className="form-label">Gênero</label>
                    <select
                      className="form-select bg-dark border-secondary text-light"
                      id="genre"
                      name="genre"
                      value={formData.genre}
                      onChange={handleInputChange}
                    >
                      {generos.map((genero) => (
                        <option key={genero[0]} value={genero[0]}>{genero[1]}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="tags" className="form-label">Tags (Opcional)</label>
                  <input
                    type="text"
                    className="form-control bg-dark border-secondary text-light"
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder="Ex: acústico, ao vivo, cover"
                  />
                  <div className="form-text text-muted">
                    Separe as tags com vírgulas
                  </div>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button type="button" className="btn btn-outline-secondary me-md-2" onClick={handleCancel}>
                    <i className="fas fa-times me-1"></i>Cancelar
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <i className="fas fa-plus me-1"></i>Adicionar Música
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Bulk Import */}
          <div className="card bg-secondary border-0 mb-4">
            <div className="card-header bg-dark border-0">
              <h4 className="mb-0">
                <i className="fas fa-upload me-2"></i>Importação em Lote
              </h4>
            </div>
            <div className="card-body">
              <p className="text-muted mb-3">
                Importe múltiplas URLs de uma vez usando um arquivo de texto
              </p>
              <div className="mb-3">
                <label htmlFor="fileUpload" className="form-label">Arquivo de URLs</label>
                <input
                  type="file"
                  className="form-control bg-dark border-secondary text-light"
                  id="fileUpload"
                  accept=".txt,.csv"
                />
                <div className="form-text text-muted">
                  Formatos aceitos: .txt, .csv (uma URL por linha)
                </div>
              </div>
              <button className="btn btn-outline-primary">
                <i className="fas fa-upload me-1"></i>Importar URLs
              </button>
            </div>
          </div>

          {/* Recent Additions */}
          <div className="card bg-secondary border-0">
            <div className="card-header bg-dark border-0">
              <h4 className="mb-0">
                <i className="fas fa-history me-2"></i>Adições Recentes
              </h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="music-thumbnail-small bg-gradient-primary me-3 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-music text-white"></i>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">Bohemian Rhapsody</h6>
                      <small className="text-muted">Queen</small>
                    </div>
                    <small className="text-muted">Há 2 min</small>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="music-thumbnail-small bg-gradient-success me-3 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-guitar text-white"></i>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">Hotel California</h6>
                      <small className="text-muted">Eagles</small>
                    </div>
                    <small className="text-muted">Há 5 min</small>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="music-thumbnail-small bg-gradient-warning me-3 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-headphones text-white"></i>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">Imagine</h6>
                      <small className="text-muted">John Lennon</small>
                    </div>
                    <small className="text-muted">Há 10 min</small>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="music-thumbnail-small bg-gradient-danger me-3 d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                      <i className="fas fa-microphone text-white"></i>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">Billie Jean</h6>
                      <small className="text-muted">Michael Jackson</small>
                    </div>
                    <small className="text-muted">Há 15 min</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Add Modal Trigger */}
          <div className="position-fixed bottom-0 end-0 p-4">
            <button
              className="btn btn-primary btn-lg rounded-circle shadow-lg"
              data-bs-toggle="modal"
              data-bs-target="#quickAddModal"
              style={{ width: '60px', height: '60px' }}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Add Modal */}
      <div className="modal fade" id="quickAddModal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content bg-dark border-secondary">
            <div className="modal-header border-secondary">
              <h5 className="modal-title">
                <i className="fas fa-bolt me-2 text-warning"></i>Adição Rápida
              </h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="quickUrl" className="form-label">URL da Música</label>
                <input
                  type="url"
                  className="form-control bg-secondary border-secondary text-light"
                  id="quickUrl"
                  placeholder="Cole a URL aqui..."
                />
              </div>
              <div className="alert alert-info border-0" style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)' }}>
                <i className="fas fa-info-circle me-2"></i>
                As informações da música serão preenchidas automaticamente
              </div>
            </div>
            <div className="modal-footer border-secondary">
              <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                Cancelar
              </button>
              <button type="button" className="btn btn-primary">
                <i className="fas fa-magic me-1"></i>Adicionar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUrls;

