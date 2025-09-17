import React, { useState } from 'react';
import MusiCreate from '../my_creater/MusiCreate.jsx';
import { SidebarItens } from '../my_creater/helpers.jsx';

const Home = () => {
  return (
    <>
      {/* Main Content */}
      <div className="container-fluid py-4">
        <div className="row">

          <div className="col-lg-3 col-md-4 mb-4">
            <div className="card bg-secondary border-0 h-100">
              <div className="card-header bg-dark border-0">
                <h5 className="mb-0"><i className="fas fa-list me-2"></i>Playlists</h5>
              </div>
              <div className="card-body">
                <div className="list-group list-group-flush">
                  <SidebarItens Link="#" classNameIcon="fas fa-heart me-2 text-danger" IcoName="Favoritas" />
                  <SidebarItens Link="#" classNameIcon="fas fa-clock me-2 text-warning" IcoName="Recentes" />
                  <SidebarItens Link="#" classNameIcon="fas fa-star me-2 text-info" IcoName="Mais Tocadas" />
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


            <div className='row'>
              <div className='col-12 mb-3'>
                <h4><i className='fas fa-music me-2 text-success'></i>Minhas Músicas</h4>
              </div>
              <div id="music_Card_List">
                <MusiCreate />
              </div>
            </div>
            <div className="row">
              <div className="col-12 mb-3">
                <h4><i className="fas fa-fire me-2 text-danger"></i>Músicas em Destaque</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

