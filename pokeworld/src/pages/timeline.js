import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Background from '../3d pokemmon/BackNeon.png';

const PokemonLineChart = () => {
  const [pokemonName, setPokemonName] = useState('charizard');
  const [stats, setStats] = useState([]);
  const [allPokemonNames, setAllPokemonNames] = useState([]);

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

  useEffect(() => {
    const fetchAllPokemonNames = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=898');
      const pokemonNames = response.data.results.map((pokemon) => pokemon.name);
      setAllPokemonNames(pokemonNames);
    };
    fetchAllPokemonNames();
  }, []);

  const handleSelectChange = (event) => {
    setPokemonName(event.target.value);
  };

  const handleInputChange = (event) => {
    setPokemonName(event.target.value.toLowerCase());
  };

  const renderPokemonOptions = () => {
    return allPokemonNames.map((name) => (
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
    <div className="timeline" style={{ backgroundImage: `url(${Background})`, width: '1417px', height: '783px', marginTop: '-20px', backgroundRepeat: 'no-repeat', backgroundColor: '#111111' }}>
      <h3 className='PokeTitle' style={{ marginTop: '40px' }}>Select or search for a Pokemon:</h3>
      <input
        type="text"
        style={{marginRight: '50px', backgroundColor: 'black', color: 'white'}}
        className='searchBar'
        value={pokemonName}
        onChange={handleInputChange}
        placeholder="Enter Pokemon name"
      /> 
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
