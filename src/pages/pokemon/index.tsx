import { Container, Content, PokemonButton } from './styles';
import { POKE_TOTAL, usePokemons } from '../../hooks/usePokemons';

import { Modal } from '../../components/modal';
import { SavePokemon } from '../../components/save-pokemon';
import { Sidebar } from '../../components/sidebar';
import avatarImg from '../../assets/avatar-1.svg';

export function Pokemon() {
  const { currentPoke, handlePickPokemon, pokemons, removeCurrentPoke } =
    usePokemons();

  async function handlePokemonItemClick() {
    handlePickPokemon();
  }

  const isPokemonSaved = !!pokemons.find((p) => p.id === currentPoke?.id);

  return (
    <Container>
      <Sidebar />
      <Content>
        <PokemonButton
          onClick={handlePokemonItemClick}
          disabled={POKE_TOTAL === pokemons?.length}
        >
          <img src={avatarImg} alt="avatar" />
          Pick a pokemon
        </PokemonButton>
      </Content>

      {currentPoke ? (
        <Modal
          isOpen={!!currentPoke}
          onAfterClose={removeCurrentPoke}
          onRequestClose={removeCurrentPoke}
        >
          <SavePokemon poke={currentPoke} saved={isPokemonSaved} />
        </Modal>
      ) : null}
    </Container>
  );
}
