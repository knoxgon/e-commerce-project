import styled from 'styled-components';
import { NavbarLink } from '../style';
import { Link } from 'react-router-dom';

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
  color: #1b9425;
  width: fit-content;
  margin: 0 auto;
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
  border-top: 2px solid #2DE262;
  transition: all 0.35s linear;
  opacity: 0;
`;
