import { POKE_TOTAL, usePokemons } from '../../hooks/usePokemons';
import {
  SideBarContainer,
  SidebarItem,
  SidebarItemButton,
  SidebarItemContainer
} from './styles';

import { getFirstAndLastWord } from '../../utils/pokemon';
import { v4 } from 'uuid';

export function Sidebar() {
  const { pokemons, handleSetCurrentPoke } = usePokemons();

  return (
    <SideBarContainer>
      <SidebarItemContainer>
        {Array(POKE_TOTAL - pokemons?.length)
          .fill(1)
          .map(() => (
            <SidebarItem key={v4()}>?</SidebarItem>
          ))}

        {pokemons?.map((poke) => (
          <SidebarItem
            captured
            key={v4()}
            onClick={() => handleSetCurrentPoke(poke)}
          >
            {getFirstAndLastWord(poke.name)}
          </SidebarItem>
        ))}
        <SidebarItemButton>+</SidebarItemButton>
      </SidebarItemContainer>
    </SideBarContainer>
  );
}
