import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, Legend, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import Background from './galaxy2.png';

function PokemonCompare() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon1, setSelectedPokemon1] = useState('');
  const [selectedPokemon2, setSelectedPokemon2] = useState('');
  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .then((response) => response.data.results)
      .then((data) => setPokemonList(data))
      .catch((error) => {
        console.log('Error:', error);
        setPokemonList([]);
      });
  }, []);

  useEffect(() => {
    if (selectedPokemon1) {
      getPokemon(selectedPokemon1, setPokemon1);
    } else {
      setPokemon1(null);
    }
  }, [selectedPokemon1]);

  useEffect(() => {
    if (selectedPokemon2) {
      getPokemon(selectedPokemon2, setPokemon2);
    } else {
      setPokemon2(null);
    }
  }, [selectedPokemon2]);

  const getPokemon = (url, setPokemon) => {
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => setPokemon(data))
      .catch((error) => {
        console.log('Error:', error);
        setPokemon(null);
      });
  };

  const comparePokemon = () => {
    if (pokemon1 && pokemon2) {
      const pokemon1Stats = pokemon1.stats.map((stat) => ({
        name: stat.stat.name,
        value: stat.base_stat,
      }));
      const pokemon2Stats = pokemon2.stats.map((stat) => ({
        name: stat.stat.name,
        value: stat.base_stat,
      }));
      const pokemon1Total = pokemon1Stats.reduce((total, stat) => total + stat.value, 0);
      const pokemon2Total = pokemon2Stats.reduce((total, stat) => total + stat.value, 0);
      return {
        pokemon1: {
          name: pokemon1.name,
          stats: pokemon1Stats,
          total: pokemon1Total,
          image: pokemon1.sprites.front_default,
        },
        pokemon2: {
          name: pokemon2.name,
          stats: pokemon2Stats,
          total: pokemon2Total,
          image: pokemon2.sprites.front_default,
        },
      };
    }
    return null;
  };

  const comparisonResult = comparePokemon();

  const renderPieChart = (pokemon) => {
    if (pokemon) {
      const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#8884D8'];
      const data = pokemon.stats.map((stat, index) => ({
        name: stat.name,
        value: stat.value,
        color: colors[index % colors.length],
      }));

      return (
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="value" nameKey="name" cx={200} cy={200} outerRadius={80} fill="#8884d8">
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      );
    }
    return null;
  };

  const renderBarChart = (pokemon) => {
    if (pokemon) {
      const data = pokemon.stats.map((stat) => ({
        name: stat.name,
        value: stat.value,
      }));

      return (
        <BarChart width={400} height={400} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      );
    }
    return null;
  };

  return (
    <div
      className="backgroundcompare"
      style={{
        backgroundImage: `url(${Background})`,
        width: '1481px',
        height: '1800px',
        marginTop: '-20px',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#111111',
      }}
    >
      <h1 className="ComTitle">Pokemon Compare</h1>
      <div className="search-container">
        <select value={selectedPokemon1} onChange={(e) => setSelectedPokemon1(e.target.value)}>
          <option value="">Select Pokemon 1</option>
          {pokemonList.map((pokemon) => (
            <option key={pokemon.name} value={pokemon.url}>
              {pokemon.name}
            </option>
          ))}
        </select>
        <select value={selectedPokemon2} onChange={(e) => setSelectedPokemon2(e.target.value)}>
          <option value="">Select Pokemon 2</option>
          {pokemonList.map((pokemon) => (
            <option key={pokemon.name} value={pokemon.url}>
              {pokemon.name}
            </option>
          ))}
        </select>
      </div>
      {comparisonResult && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              <h2>{comparisonResult.pokemon1.name}</h2>
              {renderPieChart(comparisonResult.pokemon1)}
            </div>
            <div>
              <h2>{comparisonResult.pokemon2.name}</h2>
              {renderPieChart(comparisonResult.pokemon2)}
            </div>
          </div>
          <table className="tablecompare">
            <thead>
              <tr>
                <th></th>
                <th>{comparisonResult.pokemon1.name}</th>
                <th>{comparisonResult.pokemon2.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Image</td>
                <td>
                  <img src={comparisonResult.pokemon1.image} alt="Pokemon 1" />
                </td>
                <td>
                  <img src={comparisonResult.pokemon2.image} alt="Pokemon 2" />
                </td>
              </tr>
              {comparisonResult.pokemon1.stats.map((stat, index) => (
                <tr key={index}>
                  <td>{stat.name}</td>
                  <td>{stat.value}</td>
                  <td>{comparisonResult.pokemon2.stats[index].value}</td>
                </tr>
              ))}
              <tr>
                <td>Total</td>
                <td>{comparisonResult.pokemon1.total}</td>
                <td>{comparisonResult.pokemon2.total}</td>
              </tr>
            </tbody>
          </table>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '100px' }}>
            <div>
              <h3>{comparisonResult.pokemon1.name} Stats</h3>
              {renderBarChart(comparisonResult.pokemon1)}
            </div>
            <div>
              <h3>{comparisonResult.pokemon2.name} Stats</h3>
              {renderBarChart(comparisonResult.pokemon2)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonCompare;
