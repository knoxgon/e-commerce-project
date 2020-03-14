import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavbarLink } from '../style';

export const ImageSlideContainer = styled.div`
  display: inline-flex;
  overflow: hidden;
  width: 50rem;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubLink = styled(Link)`
  text-decoration: none;
  text-decoration: inherit;
  color: #061507;
  width: fit-content;
  margin: 0 auto;
  font-family: 'Cuprum', sans-serif;
  font-weight: 500;
  padding-bottom: 1rem;
  &:hover {
    color: green;
  }
`;

export const Container = styled.div`
  position: absolute;
  width: auto;
  visibility: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  left: 10vw;
  right: 25vw;
  height: 20rem;
  top: 7.6rem;
  font-size: 1.65rem;
  background-color: #fdfdfd;
  padding: 1rem;
  border-top: 2px solid #2de262;
  transition: all 0.3s linear;
  opacity: 0;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
              0 6.7px 5.3px rgba(0, 0, 0, 0.048),
              0 12.5px 10px rgba(0, 0, 0, 0.06),
              0 22.3px 17.9px rgba(0, 0, 0, 0.072),
              0 41.8px 33.4px rgba(96, 148, 88, 0.086),
              0 100px 80px rgba(64, 255, 103, 0.12);

  ${NavbarLink}:hover &  {
    visibility: visible;
    opacity: 1;
  }
`;
