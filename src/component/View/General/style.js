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
  color: #bc802f;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
`;

export const ProductBox = styled.div`
  width: 40rem;
  max-width: 40rem;
  height: 30rem;
  margin: 1rem;
`;

export const ProductImageWrapper = styled.div`
  position: relative;
  min-width: 40rem;
  max-width: 40rem;
  height: 30rem;
  overflow: hidden;
`;

export const ProductBoxImage = styled.img`
  min-width: 40rem;
  max-width: 40rem;
  height: 30rem;
  transition: transform 1.5s  ease;
  filter: saturate(4);

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProductBoxBlur = styled.div`
  position: absolute;
  bottom: 0rem;
  filter: blur(9px);
  background-color: #fff;
  opacity: 0.9;
  width: 100%;
  height: 4rem;
`;

export const ProductBoxTitle = styled.p`
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

export const ProductBoxTagBlur = styled.div`
  position: absolute;
  top: 0;
  opacity: 0.3;
  left: 0;
  width: 10rem;
  border-bottom-right-radius: 20px;
  background-color: #e3edf1;
  height: 5rem;
`;

export const ProductBoxTag = styled.div`
  position: absolute;
  display:inline-flex;
  top: 0;
  left: 0;
  z-index: 2;
  width: 10rem;
  height: 5rem;
`;

export const ProductCart = styled(FontAwesomeIcon)`
  font-size: 2.5rem;
  color: #644f3e;
  margin: 0;
  margin-top: 1rem;
  margin-right: 1rem;
  cursor: pointer;
`;

export const ProductPriceTag = styled.p`
  font-size: 1.75rem;
  font-family: 'Baloo Chettan 2', cursive;
  font-weight: 600;
  margin: 0;
  text-align: center;
  color: #644f3e;
  margin-top: 1rem;
`;

