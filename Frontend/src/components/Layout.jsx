import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="bg-dark text-light">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            <i className="fas fa-music me-2"></i>CifraLivre
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/') ? 'active' : ''}`} 
                  to="/"
                >
                  <i className="fas fa-home me-1"></i>Home
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/add-urls') ? 'active' : ''}`} 
                  to="/add-urls"
                >
                  <i className="fas fa-plus me-1"></i>Adicionar URLs
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                  className={`nav-link ${isActive('/settings') ? 'active' : ''}`} 
                  to="/settings"
                >
                  <i className="fas fa-cog me-1"></i>Configurações
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;

