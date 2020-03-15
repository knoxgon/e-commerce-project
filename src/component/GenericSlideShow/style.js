import styled, {keyframes} from 'styled-components';

const slide = keyframes`
  0% , 20%{ transform:   translateX(0%);}
  40%, 70%{ transform:  translateX(-100%);}
  90%, 100%{ transform:  translateX(-200%);}
`
export const SlideWrapper = styled.div`
  overflow: hidden;
`;

export const SlideContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 60vh;
  animation-name: ${slide};
  animation-duration: 13.5s;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-play-state: running;
`;

export const ImageElement = styled.img`
  min-width: 100%;
`;
