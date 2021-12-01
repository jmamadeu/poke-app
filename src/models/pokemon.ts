type PokemonTypeProperties = {
  type: {
    name: string;
    url: string;
  };
};

type PokemonAbilityProperties = {
  ability: {
    name: string;
    url: string;
  };
};

type PokemonStatsProperties = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export type PokemonProperties = {
  id: number;
  name: string;
  weight: number;
  height: number;
  base_experience: number;

  types: Array<PokemonTypeProperties>;
  abilities: Array<PokemonAbilityProperties>;
  stats: Array<PokemonStatsProperties>;
};
