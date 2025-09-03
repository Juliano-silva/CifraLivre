import React, { useState } from 'react';

const Settings = () => {
  const [activeSection, setActiveSection] = useState('general');
  const [settings, setSettings] = useState({
    language: 'pt-BR',
    autoplay: true,
    notifications: true,
    startup: false,
    volume: 70,
    quality: 'high',
    crossfade: false,
    equalizer: false,
    theme: 'dark',
    accentColor: 'blue',
    animations: true,
    compactMode: false
  });

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="container py-5">
      <div className="row">
        {/* Settings Sidebar */}
        <div className="col-lg-3 col-md-4 mb-4">
          <div className="card bg-secondary border-0">
            <div className="card-header bg-dark border-0">
              <h5 className="mb-0">
                <i className="fas fa-cog me-2"></i>Configurações
              </h5>
            </div>
            <div className="list-group list-group-flush">
              <button 
                className={`list-group-item list-group-item-action bg-transparent text-light border-secondary ${activeSection === 'general' ? 'active' : ''}`}
                onClick={() => handleSectionClick('general')}
              >
                <i className="fas fa-sliders-h me-2"></i>Geral
              </button>
              <button 
                className={`list-group-item list-group-item-action bg-transparent text-light border-secondary ${activeSection === 'audio' ? 'active' : ''}`}
                onClick={() => handleSectionClick('audio')}
              >
                <i className="fas fa-volume-up me-2"></i>Áudio
              </button>
              <button 
                className={`list-group-item list-group-item-action bg-transparent text-light border-secondary ${activeSection === 'appearance' ? 'active' : ''}`}
                onClick={() => handleSectionClick('appearance')}
              >
                <i className="fas fa-palette me-2"></i>Aparência
              </button>
              <button 
                className={`list-group-item list-group-item-action bg-transparent text-light border-secondary ${activeSection === 'library' ? 'active' : ''}`}
                onClick={() => handleSectionClick('library')}
              >
                <i className="fas fa-database me-2"></i>Biblioteca
              </button>
              <button 
                className={`list-group-item list-group-item-action bg-transparent text-light border-secondary ${activeSection === 'privacy' ? 'active' : ''}`}
                onClick={() => handleSectionClick('privacy')}
              >
                <i className="fas fa-shield-alt me-2"></i>Privacidade
              </button>
              <button 
                className={`list-group-item list-group-item-action bg-transparent text-light border-secondary ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => handleSectionClick('about')}
              >
                <i className="fas fa-info-circle me-2"></i>Sobre
              </button>
            </div>
          </div>
        </div>

        {/* Settings Content */}
        <div className="col-lg-9 col-md-8">
          {/* General Settings */}
          {activeSection === 'general' && (
            <div className="settings-section">
              <div className="card bg-secondary border-0 mb-4">
                <div className="card-header bg-dark border-0">
                  <h4 className="mb-0">
                    <i className="fas fa-sliders-h me-2"></i>Configurações Gerais
                  </h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="language" className="form-label">Idioma</label>
                      <select 
                        className="form-select bg-dark border-secondary text-light" 
                        id="language"
                        value={settings.language}
                        onChange={(e) => handleSettingChange('language', e.target.value)}
                      >
                        <option value="pt-BR">Português (Brasil)</option>
                        <option value="en-US">English (US)</option>
                        <option value="es-ES">Español</option>
                        <option value="fr-FR">Français</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="autoplay" className="form-label">Reprodução Automática</label>
                      <div className="form-check form-switch">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="autoplay"
                          checked={settings.autoplay}
                          onChange={(e) => handleSettingChange('autoplay', e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="autoplay">
                          Ativar reprodução automática
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="notifications" className="form-label">Notificações</label>
                      <div className="form-check form-switch">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="notifications"
                          checked={settings.notifications}
                          onChange={(e) => handleSettingChange('notifications', e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="notifications">
                          Receber notificações
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="startup" className="form-label">Inicialização</label>
                      <div className="form-check form-switch">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="startup"
                          checked={settings.startup}
                          onChange={(e) => handleSettingChange('startup', e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="startup">
                          Iniciar com o sistema
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Audio Settings */}
          {activeSection === 'audio' && (
            <div className="settings-section">
              <div className="card bg-secondary border-0 mb-4">
                <div className="card-header bg-dark border-0">
                  <h4 className="mb-0">
                    <i className="fas fa-volume-up me-2"></i>Configurações de Áudio
                  </h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="volume" className="form-label">Volume Padrão</label>
                      <input 
                        type="range" 
                        className="form-range" 
                        id="volume"
                        min="0" 
                        max="100"
                        value={settings.volume}
                        onChange={(e) => handleSettingChange('volume', parseInt(e.target.value))}
                      />
                      <div className="d-flex justify-content-between">
                        <small className="text-muted">0%</small>
                        <small className="text-muted">{settings.volume}%</small>
                        <small className="text-muted">100%</small>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="quality" className="form-label">Qualidade de Áudio</label>
                      <select 
                        className="form-select bg-dark border-secondary text-light" 
                        id="quality"
                        value={settings.quality}
                        onChange={(e) => handleSettingChange('quality', e.target.value)}
                      >
                        <option value="low">Baixa (128 kbps)</option>
                        <option value="medium">Média (256 kbps)</option>
                        <option value="high">Alta (320 kbps)</option>
                        <option value="lossless">Sem Perdas</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="crossfade" className="form-label">Crossfade</label>
                      <div className="form-check form-switch">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="crossfade"
                          checked={settings.crossfade}
                          onChange={(e) => handleSettingChange('crossfade', e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="crossfade">
                          Ativar transição suave
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="equalizer" className="form-label">Equalizador</label>
                      <div className="form-check form-switch">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="equalizer"
                          checked={settings.equalizer}
                          onChange={(e) => handleSettingChange('equalizer', e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="equalizer">
                          Ativar equalizador
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Appearance Settings */}
          {activeSection === 'appearance' && (
            <div className="settings-section">
              <div className="card bg-secondary border-0 mb-4">
                <div className="card-header bg-dark border-0">
                  <h4 className="mb-0">
                    <i className="fas fa-palette me-2"></i>Aparência
                  </h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="theme" className="form-label">Tema</label>
                      <select 
                        className="form-select bg-dark border-secondary text-light" 
                        id="theme"
                        value={settings.theme}
                        onChange={(e) => handleSettingChange('theme', e.target.value)}
                      >
                        <option value="dark">Escuro</option>
                        <option value="light">Claro</option>
                        <option value="auto">Automático</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="accentColor" className="form-label">Cor de Destaque</label>
                      <select 
                        className="form-select bg-dark border-secondary text-light" 
                        id="accentColor"
                        value={settings.accentColor}
                        onChange={(e) => handleSettingChange('accentColor', e.target.value)}
                      >
                        <option value="blue">Azul</option>
                        <option value="green">Verde</option>
                        <option value="purple">Roxo</option>
                        <option value="red">Vermelho</option>
                        <option value="orange">Laranja</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="animations" className="form-label">Animações</label>
                      <div className="form-check form-switch">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="animations"
                          checked={settings.animations}
                          onChange={(e) => handleSettingChange('animations', e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="animations">
                          Ativar animações
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="compactMode" className="form-label">Modo Compacto</label>
                      <div className="form-check form-switch">
                        <input 
                          className="form-check-input" 
                          type="checkbox" 
                          id="compactMode"
                          checked={settings.compactMode}
                          onChange={(e) => handleSettingChange('compactMode', e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="compactMode">
                          Interface compacta
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Library Settings */}
          {activeSection === 'library' && (
            <div className="settings-section">
              <div className="card bg-secondary border-0 mb-4">
                <div className="card-header bg-dark border-0">
                  <h4 className="mb-0">
                    <i className="fas fa-database me-2"></i>Biblioteca
                  </h4>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <h6>Estatísticas da Biblioteca</h6>
                    <div className="row text-center">
                      <div className="col-md-3 mb-2">
                        <div className="bg-dark p-3 rounded">
                          <h5 className="text-primary mb-1">1,247</h5>
                          <small className="text-muted">Músicas</small>
                        </div>
                      </div>
                      <div className="col-md-3 mb-2">
                        <div className="bg-dark p-3 rounded">
                          <h5 className="text-success mb-1">156</h5>
                          <small className="text-muted">Artistas</small>
                        </div>
                      </div>
                      <div className="col-md-3 mb-2">
                        <div className="bg-dark p-3 rounded">
                          <h5 className="text-warning mb-1">89</h5>
                          <small className="text-muted">Álbuns</small>
                        </div>
                      </div>
                      <div className="col-md-3 mb-2">
                        <div className="bg-dark p-3 rounded">
                          <h5 className="text-info mb-1">23</h5>
                          <small className="text-muted">Playlists</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-grid gap-2 d-md-flex">
                    <button className="btn btn-outline-primary">
                      <i className="fas fa-sync me-1"></i>Sincronizar Biblioteca
                    </button>
                    <button className="btn btn-outline-warning">
                      <i className="fas fa-download me-1"></i>Exportar Dados
                    </button>
                    <button className="btn btn-outline-danger">
                      <i className="fas fa-trash me-1"></i>Limpar Cache
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Privacy Settings */}
          {activeSection === 'privacy' && (
            <div className="settings-section">
              <div className="card bg-secondary border-0 mb-4">
                <div className="card-header bg-dark border-0">
                  <h4 className="mb-0">
                    <i className="fas fa-shield-alt me-2"></i>Privacidade
                  </h4>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <h6>Coleta de Dados</h6>
                    <div className="form-check form-switch mb-2">
                      <input className="form-check-input" type="checkbox" id="analytics" defaultChecked />
                      <label className="form-check-label" htmlFor="analytics">
                        Permitir coleta de dados de uso para melhorias
                      </label>
                    </div>
                    <div className="form-check form-switch mb-2">
                      <input className="form-check-input" type="checkbox" id="crashReports" defaultChecked />
                      <label className="form-check-label" htmlFor="crashReports">
                        Enviar relatórios de erro automaticamente
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <h6>Histórico</h6>
                    <div className="d-grid gap-2 d-md-flex">
                      <button className="btn btn-outline-warning">
                        <i className="fas fa-history me-1"></i>Limpar Histórico de Reprodução
                      </button>
                      <button className="btn btn-outline-danger">
                        <i className="fas fa-search me-1"></i>Limpar Histórico de Busca
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* About */}
          {activeSection === 'about' && (
            <div className="settings-section">
              <div className="card bg-secondary border-0 mb-4">
                <div className="card-header bg-dark border-0">
                  <h4 className="mb-0">
                    <i className="fas fa-info-circle me-2"></i>Sobre o CifraLivre
                  </h4>
                </div>
                <div className="card-body text-center">
                  <div className="mb-4">
                    <i className="fas fa-music fa-4x text-primary mb-3"></i>
                    <h3>CifraLivre</h3>
                    <p className="text-muted">Versão 2.1.0</p>
                  </div>
                  <div className="mb-4">
                    <p>
                      Uma plataforma moderna para organizar e reproduzir sua biblioteca musical pessoal.
                      Desenvolvido com tecnologias web modernas para oferecer a melhor experiência.
                    </p>
                  </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-center">
                    <button className="btn btn-outline-primary">
                      <i className="fas fa-globe me-1"></i>Site Oficial
                    </button>
                    <button className="btn btn-outline-info">
                      <i className="fas fa-bug me-1"></i>Reportar Bug
                    </button>
                    <button className="btn btn-outline-success">
                      <i className="fas fa-heart me-1"></i>Apoiar Projeto
                    </button>
                  </div>
                  <div className="mt-4 pt-3 border-top border-secondary">
                    <small className="text-muted">
                      © 2024 CifraLivre. Todos os direitos reservados.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;

