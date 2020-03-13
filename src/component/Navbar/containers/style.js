import styled from 'styled-components';
import { NavbarLink } from '../style';

export const Container = styled.div`
  display: none;
  position: absolute;
  min-width: 7rem;
  z-index: 1;
  top: 7rem;
  font-size: 1.9rem;
  background-color: #e5e5e5;
  padding: 10px;
  border-top: 2px solid #2DE262;
  transition: all 0.7s linear;

  ${NavbarLink}:hover & {
    display: ${props => props.ifHover ? 'block' : 'none'};
  }
`;
