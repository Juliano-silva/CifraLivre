import React, { useState, useRef, useEffect } from 'react';

const MusicProgressBar = ({ 
  currentTime = 0, 
  duration = 0, 
  onSeek, 
  className = '',
  showTime = true,
  height = '6px',
  color = '#0d6efd'
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragTime, setDragTime] = useState(0);
  const progressBarRef = useRef(null);

  // Calcula a porcentagem do progresso
  const getProgressPercentage = () => {
    if (duration === 0) return 0;
    const time = isDragging ? dragTime : currentTime;
    return Math.min((time / duration) * 100, 100);
  };

  // Formata o tempo em MM:SS
  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Calcula o tempo baseado na posição do clique/drag
  const calculateTimeFromPosition = (clientX) => {
    if (!progressBarRef.current) return 0;
    
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    return percentage * duration;
  };

  // Handlers para mouse
  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
    const newTime = calculateTimeFromPosition(e.clientX);
    setDragTime(newTime);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const newTime = calculateTimeFromPosition(e.clientX);
    setDragTime(newTime);
  };

  const handleMouseUp = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    setIsDragging(false);
    const newTime = calculateTimeFromPosition(e.clientX);
    if (onSeek) {
      onSeek(newTime);
    }
  };

  // Handlers para touch (mobile)
  const handleTouchStart = (e) => {
    e.preventDefault();
    setIsDragging(true);
    const touch = e.touches[0];
    const newTime = calculateTimeFromPosition(touch.clientX);
    setDragTime(newTime);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const touch = e.touches[0];
    const newTime = calculateTimeFromPosition(touch.clientX);
    setDragTime(newTime);
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    setIsDragging(false);
    if (onSeek) {
      onSeek(dragTime);
    }
  };

  // Event listeners globais para mouse
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, dragTime]);

  // Clique direto na barra
  const handleClick = (e) => {
    if (isDragging) return;
    const newTime = calculateTimeFromPosition(e.clientX);
    if (onSeek) {
      onSeek(newTime);
    }
  };

  const progressPercentage = getProgressPercentage();
  const displayTime = isDragging ? dragTime : currentTime;

  return (
    <div className={`music-progress-container ${className}`}>
      {/* Tempos */}
      {showTime && (
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="text-muted small">
            {formatTime(displayTime)}
          </span>
          <span className="text-muted small">
            {formatTime(duration)}
          </span>
        </div>
      )}

      {/* Barra de Progresso */}
      <div 
        ref={progressBarRef}
        className="music-progress-bar"
        style={{
          height: height,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '10px',
          position: 'relative',
          cursor: 'pointer',
          overflow: 'hidden'
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onClick={handleClick}
      >
        {/* Barra de progresso preenchida */}
        <div 
          className="progress-fill"
          style={{
            width: `${progressPercentage}%`,
            height: '100%',
            background: `linear-gradient(90deg, ${color} 0%, ${color}dd 100%)`,
            borderRadius: '10px',
            transition: isDragging ? 'none' : 'width 0.1s ease',
            position: 'relative'
          }}
        >
          {/* Indicador (thumb) */}
          <div 
            className="progress-thumb"
            style={{
              position: 'absolute',
              right: '-8px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '16px',
              height: '16px',
              backgroundColor: color,
              borderRadius: '50%',
              border: '2px solid white',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
              opacity: isDragging ? 1 : 0,
              transition: 'opacity 0.2s ease',
              cursor: 'grab'
            }}
          />
        </div>

        {/* Buffer/Loading (opcional) */}
        <div 
          className="progress-buffer"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%', // Aqui você pode colocar a porcentagem do buffer
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
            zIndex: 0
          }}
        />
      </div>

      {/* Hover effect styles */}
      <style jsx>{`
        .music-progress-bar:hover .progress-thumb {
          opacity: 1 !important;
        }
        
        .music-progress-bar:hover {
          transform: scaleY(1.2);
          transition: transform 0.2s ease;
        }
        
        .progress-thumb:active {
          cursor: grabbing !important;
          transform: translateY(-50%) scale(1.2) !important;
        }
        
        @media (max-width: 768px) {
          .progress-thumb {
            width: 20px !important;
            height: 20px !important;
            right: -10px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default MusicProgressBar;

