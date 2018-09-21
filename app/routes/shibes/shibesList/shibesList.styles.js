import styled, { keyframes } from 'styled-components';
import { FaHeart } from 'react-icons/fa';

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 text-align: center;
`;

export const ShibeImagesList = styled.div `
  display: flex;
  flex-wrap: wrap;
`;

const pulse = keyframes `
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

export const FavouriteIcon = styled(FaHeart)`
  color: ${props => props.isFavourited ? '#e91e63' : '#ffe8a0'};
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 2;
  top: 10px;
  right: 10px;
  opacity: ${props => props.isFavourited ? 1 : 0};
  animation: ${pulse} 1s ease infinite;
  transition: opacity 0.25s ease-in;

  &:hover {
    cursor: pointer;
    transition: opacity 0.25 s ease - in ;
  }
`;

export const ShibeItem = styled.div `
  height: 25vw;
  width: 25vw;
  box-sizing: border-box;
  position: relative;

  &:hover ${FavouriteIcon} {
    opacity: 1;
  }
`;

export const ShibeImage = styled.img `
  max-width: 100%;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
