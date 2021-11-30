import {
  Container,
  Content,
  PokemonButton,
  SideBarContainer,
  SidebarItem,
  SidebarItemButton,
  SidebarItemContainer
} from './styles';

import avatarImg from '../../assets/avatar-1.svg';

export function Pokemon() {
  return (
    <Container>
      <SideBarContainer>
        <SidebarItemContainer>
          <SidebarItem>?</SidebarItem>
          <SidebarItem>?</SidebarItem>
          <SidebarItem>?</SidebarItem>
          <SidebarItem>?</SidebarItem>
          <SidebarItem>?</SidebarItem>
          <SidebarItem>?</SidebarItem>
          <SidebarItemButton>+</SidebarItemButton>
        </SidebarItemContainer>
      </SideBarContainer>

      <Content>
        <PokemonButton>
          <img src={avatarImg} alt="avatar" />
        </PokemonButton>
      </Content>
    </Container>
  );
}
