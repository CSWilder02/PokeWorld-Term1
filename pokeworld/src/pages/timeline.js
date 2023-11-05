import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Background from './galaxy2.png'; // Assuming you have a background image

const PokemonLineChart = () => {
  const [pokemonName, setPokemonName] = useState('charizard');
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const statData = response.data.stats.map(({ base_stat, stat }) => ({
        name: stat.name,
        value: base_stat,
      }));
      setStats(statData);
    };
    fetchData();
  }, [pokemonName]);

  const handleSelectChange = (event) => {
    setPokemonName(event.target.value);
  };

  const renderPokemonOptions = () => {
    const pokemonNames = ['charizard', 'pikachu', 'mewtwo', 'gengar'];
    return pokemonNames.map((name) => (
      <option key={name} value={name}>
        {name}
      </option>
    ));
  };

  const renderLineChart = () => {
    return (
      <LineChart width={800} height={400} data={stats}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    );
  };

  return (
    <div className="timeline" style={{ backgroundImage: `url(${Background})`, width: '1481px', height: '745px', marginTop: '-20px', backgroundRepeat: 'no-repeat', backgroundColor: '#111111' }}>
      <h3 className='PokeTitle'>Select a Pokemon:</h3>
      <select className='filterTime' value={pokemonName} onChange={handleSelectChange}>
        {renderPokemonOptions()}
      </select>
      <div className='ChartTime'>
      {renderLineChart()}
      </div>
      
    </div>
  );
};

export default PokemonLineChart;


