import { PokemonProperties } from '../models/pokemon';

export const clearPokemonProperties = (p: PokemonProperties) => ({
  id: p.id,
  name: p.name,
  weight: p.weight,
  height: p.height,
  base_experience: p.base_experience,

  types: p.types,
  abilities: p.abilities,
  stats: p.stats
});

export const getFirstAndLastWord = (name: string) => {
  if (name.length === 1) return name.toLocaleUpperCase();

  return `${name[0]}${name.charAt(name.length - 1)}`.toLocaleUpperCase();
};
