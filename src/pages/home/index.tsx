import { Button, Container } from './styles';

import { PokemonSVGIcon } from '../../assets/pokemon-logo';

export function Home() {
  return (
    <Container>
      <PokemonSVGIcon width={270} height={100} />
      <Button to="/pokemon">Start</Button>
    </Container>
  );
}
