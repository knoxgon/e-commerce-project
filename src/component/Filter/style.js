import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Query from '../../__misc/media/theme';

export const FilterAreaContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px dashed #f5efef;
  border-radius: 10px;
  justify-content: center;
  margin: 3rem auto 3rem auto;

  @media screen and (max-width: ${Query.Theme.Desktop[989]}){
    width: 40rem;
  }
  @media screen and (min-width: ${Query.Theme.Desktop[990]}) and (max-width: ${Query.Theme.Desktop[1409]}){
    width: 82rem;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  color: #157270;
  margin-right: 2rem;
  width: 12rem;
  justify-content: center;
  transition: 0.5s ease;
  border-radius: 10px;

  &:hover {
    color: white;
    background-color: #2ba79c;
  }

  &:last-child {
    margin-right: 0rem;
  }

  @media screen and (max-width: ${Query.Theme.Desktop[980]}) {
    &:not(:nth-child(3)) {
      margin-right: 0.5rem;
    }
    &:nth-child(3) {
      margin-right: 0;
    }
    &:not(:nth-child(1)) + &:not(:nth-child(3)) {
      display: none;
    }
  }
`;

export const FilterOption = styled.p`
  margin: 0;
  font-size: 1.75rem;
  white-space: nowrap;
  font-weight: 600;
  user-select: none;
  font-family: 'Baloo 2', cursive;
`;

export const FilterIcon = styled(FontAwesomeIcon)`
  font-size: 2.75rem;
`;
