import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 360px;

  /* background: ${(props) => props.theme.colors.neutral200}; */
`;

export const Name = styled.h3`
  font-size: 1.125rem;
  color: ${(props) => props.theme.colors.neutral700};
  font-weight: bold;
  text-align: center;
`;

export const StatusContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-top: 1rem;

  div {
    display: flex;
    flex-direction: column;
  }

  .divider {
    height: 1px;
    transform: rotate(-90deg);
    width: 40px;
    background: ${(props) => props.theme.colors.neutral500};
  }

  span {
    font-size: 0.75rem;
    color: red;
    color: ${(props) => props.theme.colors.neutral700};
    font-weight: bold;

    &.value {
      font-size: 1.125rem;
    }
  }
`;

export const Divider = styled.span`
  display: flex;
  align-items: center;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  --text-divider-gap: 1rem;
  color: ${(props) => props.theme.colors.neutral700};
  margin: 1rem 0;

  &::before,
  &::after {
    content: '';
    height: 1px;
    background-color: silver;
    flex-grow: 1;
  }

  &::before {
    margin-right: var(--text-divider-gap);
  }

  &::after {
    margin-left: var(--text-divider-gap);
  }
`;

export const StatsContainer = styled.div`
  p {
    display: flex;
    justify-content: space-between;

    font-weight: bold;
    color: ${(props) => props.theme.colors.neutral700};
  }
`;

export const AbilitiesContainer = styled.div`
  span {
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.colors.neutral700};
    font-weight: bold;
  }
`;

export const ActionButton = styled.button`
  background: ${(props) => props.theme.colors.danger500};
  width: 221px;
  align-self: center;
  border: 0;
  height: 50px;
  border-radius: 42px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;
