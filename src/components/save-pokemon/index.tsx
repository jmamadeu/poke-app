import {
  AbilitiesContainer,
  ActionButton,
  Container,
  Divider,
  Name,
  StatsContainer,
  StatusContent
} from './styles';

import { PokemonProperties } from '../../models/pokemon';
import { usePokemons } from '../../hooks/usePokemons';
import { v4 } from 'uuid';

type SavePokemonType = {
  poke: PokemonProperties;
  saved: boolean;
};

export function SavePokemon({ poke, saved }: SavePokemonType) {
  const { savePokemon } = usePokemons();

  const handleClickPoke = () => {
    savePokemon();
  };

  return (
    <Container>
      <Name>{poke.name}</Name>
      <StatusContent>
        <div>
          <span>HP</span>
          <span className="value">{poke.base_experience}</span>
        </div>
        <div className="divider" />
        <div>
          <span>Height</span>
          <span className="value">{poke.height}m</span>
        </div>
        <div className="divider" />
        <div>
          <span>Weight</span>
          <span className="value">{poke.weight}kg</span>
        </div>
      </StatusContent>
      <Divider>Type</Divider>
      <AbilitiesContainer>
        {poke.types.map((ab) => (
          <span key={v4()}>{ab.type.name}</span>
        ))}
      </AbilitiesContainer>
      <Divider>Abilities</Divider>
      <AbilitiesContainer>
        {poke.abilities.map((ab) => (
          <span key={v4()}>{ab.ability.name}</span>
        ))}
      </AbilitiesContainer>

      <Divider>Stats</Divider>
      <StatsContainer>
        {poke.stats.map((s) => (
          <p key={v4()}>
            <span>{s.stat.name}</span>
            <span>{s.base_stat}</span>
          </p>
        ))}
      </StatsContainer>

      <ActionButton type="button" onClick={handleClickPoke}>
        {saved ? 'Set Free' : 'Pick Pokemon'}
      </ActionButton>
    </Container>
  );
}
