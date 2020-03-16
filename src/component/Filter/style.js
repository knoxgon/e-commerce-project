import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Query from '../../__misc/media/theme';

export const FilterAreaContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px dashed #f5efef;
  margin: 0 auto;
  border-radius: 10px;
  justify-content: center;
  margin-bottom: 3rem;
  margin-top: 3rem;

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

  &:hover {
    color: white;
    background-color: #2ba79c;
  }

  @media screen and (max-width: ${Query.Theme.Desktop[980]}) {
    margin-right: 0rem;
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
`;

export const FilterIcon = styled(FontAwesomeIcon)`
  font-size: 2.75rem;
`;
