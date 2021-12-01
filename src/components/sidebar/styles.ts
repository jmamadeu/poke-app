import styled, { css } from 'styled-components';

export const SideBarContainer = styled.aside``;

export const SidebarItemContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const item = css`
  height: 3.125rem;
  width: 3.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  border-radius: 1.563rem;
`;

export const SidebarItem = styled.li<{ captured?: boolean }>`
  ${item}

  background: ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.dark};

  border: 2px solid ${(props) => props.theme.colors.dark};

  font-size: 1.5rem;

  ${(props) =>
    props.captured
      ? css`
          color: red;
          background: ${(props) => props.theme.colors.basic100};
          border: 2px solid ${(props) => props.theme.colors.green};
          font-size: 1rem;
          cursor: pointer;
        `
      : ''}
`;

export const SidebarItemButton = styled.button`
  ${item}
  background: ${(props) => props.theme.colors.green};

  border: none;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.basic100};
  background: ${(props) => props.theme.colors.danger500};

  border: 2px solid ${(props) => props.theme.colors.danger200};
`;
