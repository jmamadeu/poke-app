import {
  Container,
  Content,
  PokemonButton,
  SideBarContainer,
  SidebarItem,
  SidebarItemButton,
  SidebarItemContainer
} from './styles';
import {
  clearPokemonProperties,
  getFirstAndLastWord
} from '../../utils/pokemon';

import { Modal } from '../../components/modal';
import { PokemonProperties } from '../../models/pokemon';
import { SavePokemon } from '../../components/save-pokemon';
import { api } from '../../services/api';
import avatarImg from '../../assets/avatar-1.svg';
import { getRandomInt } from '../../utils';
import { useState } from 'react';
import { v4 } from 'uuid';

const POKE_TOTAL = 6;

export function Pokemon() {
  const [pokemons, setPokemons] = useState<PokemonProperties[]>([]);
  const [currentPokemon, setCurrentPokemon] =
    useState<PokemonProperties | null>(null);

  async function handleCreatePokemonClick() {
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

      setPokemons((current) => [...current, pokemonPicked]);
    } catch (err: any) {
      alert(err.message);
    }
  }

  async function handlePokemonItemClick(poke: PokemonProperties) {
    setCurrentPokemon(poke);
  }

  return (
    <Container>
      <SideBarContainer>
        <SidebarItemContainer>
          {Array(POKE_TOTAL - pokemons?.length)
            .fill(1)
            .map(() => (
              <SidebarItem key={v4()}>?</SidebarItem>
            ))}

          {pokemons.map((poke) => (
            <SidebarItem
              captured
              key={v4()}
              onClick={() => handlePokemonItemClick(poke)}
            >
              {getFirstAndLastWord(poke.name)}
            </SidebarItem>
          ))}
          <SidebarItemButton>+</SidebarItemButton>
        </SidebarItemContainer>
      </SideBarContainer>

      <Content>
        <PokemonButton
          onClick={handleCreatePokemonClick}
          disabled={POKE_TOTAL === pokemons.length}
        >
          <img src={avatarImg} alt="avatar" />
        </PokemonButton>
      </Content>

      <Modal
        isOpen={!!currentPokemon}
        onAfterClose={() => setCurrentPokemon(null)}
        onRequestClose={() => setCurrentPokemon(null)}
      >
        <SavePokemon />
      </Modal>
    </Container>
  );
}
