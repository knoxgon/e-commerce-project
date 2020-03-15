import styled from 'styled-components';

export const GeneralContainer = styled.div`
  margin: 7.5rem;
  display: flex;
  flex-direction: column;
  min-width: 40rem;
`;

export const ContentTitle = styled.p`
  font-size: 5rem;
  text-align: center;
  margin: 2.5rem;
  color: #bc802f
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
`;

export const ItemBox = styled.div`
  width: 40rem;
  max-width: 40rem;
  height: 30rem;
  margin: 1rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  min-width: 40rem;
  max-width: 40rem;
  height: 30rem;
  overflow: hidden;
`;

export const ItemBoxImage = styled.img`
  min-width: 40rem;
  max-width: 40rem;
  height: 30rem;
  transition: transform 1.5s  ease;
  filter: saturate(4);

  &:hover {
    transform: scale(1.1);
  }
`;

export const ItemBoxBlur = styled.div`
  position: absolute;
  bottom: 0rem;
  filter: blur(9px);
  background-color: #fff;
  opacity: 0.9;
  width: 100%;
  height: 4rem;
`;
