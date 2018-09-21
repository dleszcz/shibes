import styled from 'styled-components';

export const Container = styled.div `
  width: 100%;
  height: 50px;
  position: fixed;
  display: flex;
  background-color: #ffe8a0;
  color: black;
  top: 0;
  left: 0;
  z-index: 3;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  box-sizing: border-box;
`;

export const FavouritesLink = styled.div `
  color: black;
  cursor: pointer;
`;
