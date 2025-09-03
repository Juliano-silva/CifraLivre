import React from 'react';

const Home = () => {
  return (
    <>
      {/* Main Content */}
      <div className="container-fluid py-4">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 col-md-4 mb-4">
            <div className="card bg-secondary border-0 h-100">
              <div className="card-header bg-dark border-0">
                <h5 className="mb-0"><i className="fas fa-list me-2"></i>Playlists</h5>
              </div>
              <div className="card-body">
                <div className="list-group list-group-flush">
                  <a href="#" className="list-group-item list-group-item-action bg-transparent text-light border-secondary">
                    <i className="fas fa-heart me-2 text-danger"></i>Favoritas
                  </a>
                  <a href="#" className="list-group-item list-group-item-action bg-transparent text-light border-secondary">
                    <i className="fas fa-clock me-2 text-warning"></i>Recentes
                  </a>
                  <a href="#" className="list-group-item list-group-item-action bg-transparent text-light border-secondary">
                    <i className="fas fa-star me-2 text-info"></i>Mais Tocadas
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Main Music Area */}
          <div className="col-lg-9 col-md-8">
            {/* Search Bar */}
            <div className="row mb-4">
              <div className="col-12">
                <div className="input-group">
                  <span className="input-group-text bg-secondary border-secondary text-light">
                    <i className="fas fa-search"></i>
                  </span>
                  <input 
                    type="text" 
                    className="form-control bg-dark border-secondary text-light" 
                    placeholder="Buscar músicas, artistas ou álbuns..."
                  />
                </div>
              </div>
            </div>

            {/* Music Grid */}
            <div className="row">
              <div className="col-12 mb-3">
                <h4><i className="fas fa-fire me-2 text-danger"></i>Músicas em Destaque</h4>
              </div>
              
              {/* Music Card 1 */}
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div className="card bg-secondary border-0 music-card">
                  <div className="card-img-top position-relative">
                    <div className="music-thumbnail bg-gradient-danger d-flex align-items-center justify-content-center" style={{height: '200px'}}>
                      <i className="fas fa-music fa-3x text-white opacity-50"></i>
                    </div>
                    <div className="play-overlay position-absolute top-50 start-50 translate-middle">
                      <button className="btn btn-primary btn-lg rounded-circle">
                        <i className="fas fa-play"></i>
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title mb-1">Dancing Between The Shadows</h6>
                    <p className="card-text text-muted small">Of Rhythm</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">4:32</small>
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

              {/* Music Card 2 */}
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div className="card bg-secondary border-0 music-card">
                  <div className="card-img-top position-relative">
                    <div className="music-thumbnail bg-gradient-warning d-flex align-items-center justify-content-center" style={{height: '200px'}}>
                      <i className="fas fa-guitar fa-3x text-white opacity-50"></i>
                    </div>
                    <div className="play-overlay position-absolute top-50 start-50 translate-middle">
                      <button className="btn btn-primary btn-lg rounded-circle">
                        <i className="fas fa-play"></i>
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title mb-1">A.L.O.N.E</h6>
                    <p className="card-text text-muted small">Subscribe</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">3:45</small>
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

              {/* Music Card 3 */}
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div className="card bg-secondary border-0 music-card">
                  <div className="card-img-top position-relative">
                    <div className="music-thumbnail bg-gradient-info d-flex align-items-center justify-content-center" style={{height: '200px'}}>
                      <i className="fas fa-headphones fa-3x text-white opacity-50"></i>
                    </div>
                    <div className="play-overlay position-absolute top-50 start-50 translate-middle">
                      <button className="btn btn-primary btn-lg rounded-circle">
                        <i className="fas fa-play"></i>
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title mb-1">Alone in the Abyss</h6>
                    <p className="card-text text-muted small">Yoasobi</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">4:18</small>
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

              {/* Music Card 4 */}
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div className="card bg-secondary border-0 music-card">
                  <div className="card-img-top position-relative">
                    <div className="music-thumbnail bg-gradient-success d-flex align-items-center justify-content-center" style={{height: '200px'}}>
                      <i className="fas fa-microphone fa-3x text-white opacity-50"></i>
                    </div>
                    <div className="play-overlay position-absolute top-50 start-50 translate-middle">
                      <button className="btn btn-primary btn-lg rounded-circle">
                        <i className="fas fa-play"></i>
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title mb-1">We Are Chaos</h6>
                    <p className="card-text text-muted small">Song Artist</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">5:12</small>
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
            </div>

            {/* Recent Songs Section */}
            <div className="row mt-4">
              <div className="col-12 mb-3">
                <h4><i className="fas fa-clock me-2 text-warning"></i>Tocadas Recentemente</h4>
              </div>
              <div className="col-12">
                <div className="card bg-secondary border-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="d-flex align-items-center">
                          <div className="music-thumbnail-small bg-gradient-primary me-3 d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                            <i className="fas fa-music text-white"></i>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Smile</h6>
                            <small className="text-muted">Artist Name</small>
                          </div>
                          <button className="btn btn-sm btn-outline-light">
                            <i className="fas fa-play"></i>
                          </button>
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="d-flex align-items-center">
                          <div className="music-thumbnail-small bg-gradient-secondary me-3 d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                            <i className="fas fa-guitar text-white"></i>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">Heartless</h6>
                            <small className="text-muted">Artist Name</small>
                          </div>
                          <button className="btn btn-sm btn-outline-light">
                            <i className="fas fa-play"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Music Player Bar */}
      <div className="fixed-bottom bg-dark border-top border-secondary">
        <div className="container-fluid py-3">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="d-flex align-items-center">
                <div className="music-thumbnail-small bg-gradient-info me-3 d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px'}}>
                  <i className="fas fa-music text-white"></i>
                </div>
                <div>
                  <h6 className="mb-0 small">Dynamic Warmup</h6>
                  <small className="text-muted">Artist</small>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="d-flex justify-content-center align-items-center mb-2">
                <button className="btn btn-sm btn-outline-light me-2">
                  <i className="fas fa-random"></i>
                </button>
                <button className="btn btn-sm btn-outline-light me-2">
                  <i className="fas fa-step-backward"></i>
                </button>
                <button className="btn btn-primary btn-lg me-2">
                  <i className="fas fa-pause"></i>
                </button>
                <button className="btn btn-sm btn-outline-light me-2">
                  <i className="fas fa-step-forward"></i>
                </button>
                <button className="btn btn-sm btn-outline-light">
                  <i className="fas fa-redo"></i>
                </button>
              </div>
              <div className="progress" style={{height: '4px'}}>
                <div className="progress-bar bg-primary" style={{width: '35%'}}></div>
              </div>
              <div className="d-flex justify-content-between mt-1">
                <small className="text-muted">1:24</small>
                <small className="text-muted">4:00</small>
              </div>
            </div>
            <div className="col-md-3 text-end">
              <div className="d-flex justify-content-end align-items-center">
                <button className="btn btn-sm btn-outline-light me-2">
                  <i className="fas fa-heart"></i>
                </button>
                <button className="btn btn-sm btn-outline-light me-2">
                  <i className="fas fa-volume-up"></i>
                </button>
                <div className="progress me-2" style={{width: '100px', height: '4px'}}>
                  <div className="progress-bar bg-light" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

