import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Routes/Home.jsx';
import Destination from './Routes/Destination.jsx';
import Crew from './Routes/Crew.jsx';
import Technology from './Routes/Technology.jsx';
import './styles/App.css';

function App() {
  const [rawData, setRawData] = useState([]);
  const [destinationData, setDestinationData] = useState([]);
  const [crewData, setCrewData] = useState([]);
  const [techData, setTechData] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => {
        setRawData(data);
      });
  }, []);

  useEffect(() => {
    setDestinationData(rawData.destinations);
    setCrewData(rawData.crew);
    setTechData(rawData.technology);
  }, [rawData]);

  useEffect(() => {
    select();
  });

  function select() {
    const btns = document.querySelectorAll('.btn-select');
    btns.forEach((btn) => {
      
      btn.addEventListener('click', (e) => {
        btns.forEach((x) => x.classList.remove('active'))
        e.target.classList.add('active');
      });
    });
  }

  function destinationChange(e) {
    e.preventDefault();
    setDestinationData(
      rawData.destinations.filter((data) => data.name === e.target.id)
    );
  }

  function crewChange(e) {
    e.preventDefault();
    setCrewData(rawData.crew.filter((data) => data.name === e.target.id));
  }

  function techChange(e) {
    e.preventDefault();
    setTechData(
      rawData.technology.filter(
        (data) => data.name === (e.target.parentElement.id || e.target.id)
      )
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='destination'
          element={
            <Destination
              rawData={rawData.destinations}
              data={destinationData}
              destinationChange={destinationChange}
            />
          }
        />
        <Route
          path='Crew'
          element={
            <Crew
              rawData={rawData.crew}
              data={crewData}
              crewChange={crewChange}
            />
          }
        />
        <Route
          path='Technology'
          element={
            <Technology
              data={techData}
              rawData={rawData.technology}
              techChange={techChange}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
