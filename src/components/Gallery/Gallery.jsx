import React from 'react';
import './Gallery.css';
import PopUpCard from '../PopUpCard/PopUpCard';

const Gallery = ({ animalData, onCardClick, isPopUpOpen, selectedAnimalData, handleClosePopUp, query }) => { // Add query here
  return (
    <div>
      <h1>Gallery</h1>
      {animalData.length === 0 && query && (
        <p>Sorry, this animal doesn't exist</p>
      )}
      <div className="gallery-grid">
        {animalData.map((animal) => (
          <div key={animal.id} className="gallery-card" onClick={() => onCardClick(animal)}>
            <img src={animal.image} alt={animal.name} className="gallery-photo" />
            <div className="gallery-info">
              <h2>{animal.name}</h2>
              <p>{animal.origin}</p>
            </div>
          </div>
        ))}
      </div>
      <PopUpCard 
        isOpen={isPopUpOpen} 
        animal={selectedAnimalData} 
        onClose={handleClosePopUp} 
      />
    </div>
  );
};

export default Gallery;
