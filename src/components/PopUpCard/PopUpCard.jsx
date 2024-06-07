import React from 'react';
import './PopUpCard.css';

const PopUpCard = ({ isOpen, animal, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
        {animal && (
          <>
            <h2>{animal.name}</h2>
            <img src={animal.image} alt={animal.name} className="popup-photo" />
            <p><strong>Origin:</strong> {animal.origin}</p>
            <p><strong>Breed Group:</strong> {animal.breed_group}</p>
            <p><strong>Size:</strong> {animal.size}</p>
            <p><strong>Lifespan:</strong> {animal.lifespan}</p>
            <p><strong>Temperament:</strong> {animal.temperament}</p>
            <p><strong>Colors:</strong> {animal.colors}</p>
            <p><strong>Description:</strong> {animal.description}</p>
            
          </>
        )}
      </div>
    </div>
  );
};

export default PopUpCard;
