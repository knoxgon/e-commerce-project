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

export const ItemBoxTitle = styled.p`
  position: absolute;
  bottom: 0.5rem;
  font-family: 'Baloo Chettan 2', cursive;
  left: 1rem;  
  padding: 0;
  margin: 0;
  color: #6f5f22;
  font-size: 2.25rem;
  font-weight: 600;
`;

export const ItemBoxTagBlur = styled.div`
  position: absolute;
  top: 0;
  opacity: 0.3;
  left: 0;
  width: 10rem;
  border-bottom-right-radius: 20px;
  background-color: #e3edf1;
  height: 5rem;
`;

export const ItemBoxTag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 10rem;
  height: 5rem;
`;

