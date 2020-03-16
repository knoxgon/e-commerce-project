import styled from 'styled-components';

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
`;
