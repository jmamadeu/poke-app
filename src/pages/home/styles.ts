import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;

  background: ${(props) => props.theme.colors.primaryGradient};
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.colors.danger500};
  color: ${(props) => props.theme.colors.basic100};
  border-radius: 2.625rem;

  font-weight: 700;
  font-size: 1.125rem;
  text-decoration: none;

  height: 3.5rem;
  width: 7.75rem;
  box-shadow: 2px 10px 5px rgba(0, 0, 0, 0.2);

  margin-top: 1.938rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
