// src/components/PokemonCard.tsx
import React from 'react';

interface PokemonCardProps {
  pokemonData: any; // Datos del Pokemon
  onToggleFavorite: () => void; // Manejar la acción de agregar/eliminar favorito
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonData, onToggleFavorite }) => {
  const { name, imageUrl, type } = pokemonData;

  return (
    <div className={`pokemon-card ${type}`}>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <button onClick={onToggleFavorite}>Toggle Favorite</button>
    </div>
  );
};

export default PokemonCard;