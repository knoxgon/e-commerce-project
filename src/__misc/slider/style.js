import styled, {keyframes} from 'styled-components';

const show = keyframes`
  100% { transform: translateX(-100%); }
`
export const Image = styled.img`
  width: 25rem;
`;

export const ImageWrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  width: 50rem;
  animation: ${show} 12.5s ease-in-out infinite;
`;
