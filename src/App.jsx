import React, { useState, useEffect } from "react";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import NavBar from "./components/NavBar/NavBar";

const apiEndpoints = {
  Dogs: "https://freetestapi.com/api/v1/dogs",
  Cats: "https://freetestapi.com/api/v1/cats",
  Birds: "https://freetestapi.com/api/v1/birds",
};

const App = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [animalData, setAnimalData] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedAnimalData, setSelectedAnimalData] = useState(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  useEffect(() => {
    if (selectedAnimal) {
      fetch(apiEndpoints[selectedAnimal])
        .then((response) => response.json())
        .then((data) => setAnimalData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [selectedAnimal]);

  const handleCardClick = (animal) => {
    setSelectedAnimalData(animal);
    setIsPopUpOpen(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpOpen(false);
    setSelectedAnimalData(null);
  };

  const filteredData = animalData.filter(animal =>
    animal.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="App">
      <NavBar setSelectedAnimal={setSelectedAnimal} query={query} setQuery={setQuery} />
      <Gallery 
        animalData={filteredData} 
        onCardClick={handleCardClick} 
        isPopUpOpen={isPopUpOpen}
        selectedAnimalData={selectedAnimalData}
        handleClosePopUp={handleClosePopUp}
        query={query} // Pass the query prop here
      />
    </div>
  );
};

export default App;
