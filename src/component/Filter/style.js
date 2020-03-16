import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FilterAreaContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100vw - 57rem);
  min-width: 40rem;
  max-width: 123rem;
  margin: 0 auto;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  color: #157270;
  margin-right: 2rem;

  &:hover {
    color: white;
    background-color: #2ba79c;
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
