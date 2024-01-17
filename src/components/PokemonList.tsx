// src/components/PokemonList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const PokemonList: React.FC = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([]);

  useEffect(() => {
    // Llamada inicial a la API para obtener la lista de Pokémon
    // Puedes ajustar la URL de la API según tus necesidades
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => {
        const results = response.data.results;
        // Llenar la lista de Pokémon con datos básicos
        const updatedPokemonList = results.map((pokemon: any) => ({
          name: pokemon.name,
          imageUrl: `https://pokeapi.co/media/sprites/pokemon/${pokemon.url.split('/')[6]}.png`,
          type: 'normal', // Puedes ajustar el tipo de fondo según el tipo de Pokémon
        }));
        setPokemonList(updatedPokemonList);
      })
      .catch(error => {
        console.error('Error fetching Pokemon data:', error);
      });
  }, []);

  const handleToggleFavorite = (index: number) => {
    // Implementar la lógica para agregar/eliminar Pokémon favorito
  };

  return (
    <div className="pokemon-list">
      {pokemonList.map((pokemon, index) => (
        <PokemonCard
          key={index}
          pokemonData={pokemon}
          onToggleFavorite={() => handleToggleFavorite(index)}
        />
      ))}
    </div>
  );
};

export default PokemonList;
