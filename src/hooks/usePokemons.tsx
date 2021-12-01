import { createContext, useContext, useState } from 'react';

import { PokemonProperties } from '../models/pokemon';
import { api } from '../services/api';
import { clearPokemonProperties } from '../utils/pokemon';
import { getRandomInt } from '../utils';

type PokemonContext = {
  pokemons: PokemonProperties[];
  handlePickPokemon: () => Promise<void>;
  removeCurrentPoke: () => void;
  handleSetCurrentPoke: (poke: PokemonProperties) => void;
  currentPoke: PokemonProperties | null;
  savePokemon: () => void;
};

export const PokemonContext = createContext<PokemonContext>(
  {} as PokemonContext
);

export const POKE_TOTAL = 6;

function getFromLocalStorage() {
  const pokemons = localStorage.getItem('@pokemons');

  if (!pokemons) return [];

  const pokemonsParsed = JSON.parse(pokemons);

  return pokemonsParsed as PokemonProperties[];
}

function setToLocalStorage(pokemons: PokemonProperties[]) {
  localStorage.setItem('@pokemons', JSON.stringify(pokemons));
}

export const PokemonProvider: React.FC = ({ children }) => {
  const [pokemons, setPokemons] = useState<PokemonProperties[]>(() =>
    getFromLocalStorage()
  );
  const [currentPoke, setCurrentPoke] = useState<PokemonProperties | null>(
    null
  );

  const isPokemonAlreadyExists = pokemons.find((p) => p.id === currentPoke?.id);

  async function savePokemon() {
    if (isPokemonAlreadyExists) {
      setPokemons((current) => {
        const pokens = current.filter((p) => p.id !== currentPoke?.id);
        setToLocalStorage(pokens);

        return pokens;
      });
    } else if (currentPoke)
      setPokemons((current) => {
        const pokens = [...current, currentPoke];
        setToLocalStorage(pokens);

        return pokens;
      });

    setCurrentPoke(null);
  }

  async function handlePickPokemon() {
    if (POKE_TOTAL === pokemons.length) {
      alert(`There's no more space to put this pokemon`);
      return;
    }
    const pokeId = getRandomInt(1, 807);

    try {
      const { data: pokeResponse } = await api.get<PokemonProperties>(
        `/${pokeId}`
      );

      const pokemonPicked = clearPokemonProperties(pokeResponse);

      setCurrentPoke(pokemonPicked);
    } catch (err: any) {
      alert(err.message);
    }
  }

  const removeCurrentPoke = () => setCurrentPoke(null);
  const handleSetCurrentPoke = (poke: PokemonProperties) =>
    setCurrentPoke(poke);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        handlePickPokemon,
        currentPoke,
        savePokemon,
        removeCurrentPoke,
        handleSetCurrentPoke
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemons = () => {
  const pokeContext = useContext(PokemonContext);
  return pokeContext;
};
