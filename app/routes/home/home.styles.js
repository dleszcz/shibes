import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 text-align: center;
`;

export const ShibeImagesList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FouvoriteIcon = styled.div`
  background-color: red;
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 2;
  top: 10px;
  right: 10px;
  opacity: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const ShibeItem = styled.div`
  height: 25vw;
  width: 25vw;
  box-sizing: border-box;
  position: relative;

  &:hover ${FouvoriteIcon} {
    opacity: 1;
  }
`;

export const ShibeImage = styled.img`
  max-width: 100%;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
