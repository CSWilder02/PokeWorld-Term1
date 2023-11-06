import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, Legend, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import Background from '../3d pokemmon/BackNeon.png';

function PokemonCompare() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon1, setSelectedPokemon1] = useState('');
  const [selectedPokemon2, setSelectedPokemon2] = useState('');
  const [pokemon1, setPokemon1] = useState(null);
  const [pokemon2, setPokemon2] = useState(null);
  const [strongerPokemon, setStrongerPokemon] = useState(null);

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

      // Define the stronger Pokémon data
      const strongerPokemonData = {
        name: 'Stronger Pokemon',
        stats: [
          { name: 'Stat1', value: 100 },
          { name: 'Stat2', value: 110 },
          { name: 'Stat3', value: 120 },
          // Add other stats as needed
        ],
        total: 330,
        image: 'URL_OR_IMAGE_PATH', // Replace with the image URL of the stronger Pokémon
      };

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
        strongerPokemon: strongerPokemonData,
      };
    }
    return null;
  };

  const comparisonResult = comparePokemon();

  const renderPieChart = (pokemon) => {
    if (pokemon) {
      const colors = ['#28FFFF', '#9204D6', '#C200B6', '#E600AC'];
      const data = pokemon.stats.map((stat, index) => ({
        name: stat.name,
        value: stat.value,
        color: colors[index % colors.length], // Add a closing parenthesis here
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
        width: '1401px',
        height: '2000px',
        marginTop: '-20px',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#111111',
      }}
    >
      <h1 className="ComTitle">Pokemon Compare</h1>
      <div className="search-container">
        <select className="search-container1" value={selectedPokemon1} onChange={(e) => setSelectedPokemon1(e.target.value)}>
          <option value="">Select Pokemon 1</option>
          {pokemonList.map((pokemon) => (
            <option key={pokemon.name} value={pokemon.url}>
              {pokemon.name}
            </option>
          ))}
        </select>
        <select className="search-container2" value={selectedPokemon2} onChange={(e) => setSelectedPokemon2(e.target.value)}>
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
            <div style={{ marginLeft: '-200px' }}>
              <h2>{comparisonResult.pokemon2.name}</h2>
              {renderPieChart(comparisonResult.pokemon2)}
            </div>
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <table className="tablecompare" style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'black', border: '1px solid #02004B' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #02004B' }}></th>
                  <th style={{ border: '1px solid #02004B' }}>{comparisonResult.pokemon1.name}</th>
                  <th style={{ border: '1px solid #02004B' }}>{comparisonResult.pokemon2.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ border: '1px solid #000', backgroundColor: 'black' }}>Image</td>
                  <td style={{ border: '1px solid #000', backgroundColor: 'black' }}>
                    <img src={comparisonResult.pokemon1.image} alt="Pokemon 1" />
                  </td>
                  <td style={{ border: '1px solid #000', backgroundColor: 'black' }}>
                    <img src={comparisonResult.pokemon2.image} alt="Pokemon 2" />
                  </td>
                </tr>
                {comparisonResult.pokemon1.stats.map((stat, index) => (
                  <tr key={index}>
                    <td style={{ border: '1px solid #000', paddingLeft: '25px', paddingRight: '25px', paddingBottom: '10px', paddingTop: '10px', backgroundColor: 'black' }}>{stat.name}</td>
                    <td style={{ border: '1px solid #000', backgroundColor: 'black' }}>{stat.value}</td>
                    <td style={{ border: '1px solid #000', backgroundColor: 'black' }}>{comparisonResult.pokemon2.stats[index].value}</td>
                  </tr>
                ))}
                <tr>
                  <td style={{ border: '1px solid #000', backgroundColor: 'black' }}>Total</td>
                  <td style={{ border: '1px solid #000', backgroundColor: 'black' }}>{comparisonResult.pokemon1.total}</td>
                  <td style={{ border: '1px solid #000', backgroundColor: 'black' }}>{comparisonResult.pokemon2.total}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '100px' }}>
            <div>
              <h3>{comparisonResult.pokemon1.name} Stats</h3>
              {renderBarChart(comparisonResult.pokemon1)}
            </div>
            <div style={{ marginLeft: '-200px' }}>
              <h3>{comparisonResult.pokemon2.name} Stats</h3>
              {renderBarChart(comparisonResult.pokemon2)}
            </div>
          </div>
        </div>
      )}
    {strongerPokemon && (
  <div>
    {/* Display the stronger Pokémon data */}
    <h2>{strongerPokemon.name}</h2>
    {renderPieChart(strongerPokemon)}
    <table className="tablecompare">
      <tbody>
        <tr>
          <td>Image</td>
          <td>
            <img src={strongerPokemon.image} alt="Stronger Pokemon" />
          </td>
        </tr>
        {strongerPokemon.stats.map((stat, index) => (
          <tr key={index}>
            <td>{stat.name}</td>
            <td>{stat.value}</td>
          </tr>
        ))}
        <tr>
          <td>Total</td>
          <td>{strongerPokemon.total}</td>
        </tr>
      </tbody>
    </table>
  </div>
)}
    </div>
  );
}

export default PokemonCompare;
