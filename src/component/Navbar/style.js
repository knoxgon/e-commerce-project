import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export const NavArea = styled.div`
  width: 100vw;
  height: 10rem;
  border-top: 0.5rem solid #2de262;
  border-bottom: 1px solid #f1eeee;
  font-family: 'Varela Round', sans-serif;
`;

export const NavbarItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
`;

export const NavbarLogo = styled.img`
  width: 10rem;
  height: 10rem;
  padding-left: 4rem;
`;

export const NavbarLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: ${props => props.color ? props.color : '#9a9085'};
`;

export const NavbarLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 2.5rem;
  font-weight: 600;
  transition: 0.4s ease; 
  padding: 1rem;
  
  &:hover {
    color: #267d9e;
    background-color: black;
  }
`;

export const NavbarImage = styled(FontAwesomeIcon)`
  margin-right: 1rem;
  margin-left: 0.5rem;
  font-size: ${props => props.textsize ? props.textsize : "1.7rem"};
`;

export const NavbarDescription = styled(Link)`
  text-decoration: none;
  color: inherit;
  text-decoration: inherit;
  font-size: ${props => props.textsize ? props.textsize : "1.2rem"};
`;

export const NavbarDescriptionCenter = styled(NavbarDescription)`
  font-family: 'Cuprum', sans-serif;
  font-size: 2rem;
  font-weight: 500;
`;
