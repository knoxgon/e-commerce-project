import styled, {keyframes} from 'styled-components';

const slide = keyframes`
  0% , 20%{ transform:   translateX(0%);}
  40%, 70%{ transform:  translateX(-100%);}
  90%, 100%{ transform:  translateX(-200%);}
`
export const SlideWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
`;

export const ImageElement = styled.img`
  min-width: 100%;
`;
