import React from 'react';
import { FilterAreaContainer, FilterWrapper, FilterOption, FilterIcon } from './style';
import { faStar, faAward, faCouch } from '@fortawesome/free-solid-svg-icons';

const Filter = (props) => {

  return (
    <FilterAreaContainer>
      <FilterWrapper>
        <FilterIcon icon={faStar}/>
        <FilterOption>Most popular</FilterOption>
      </FilterWrapper>
      <FilterWrapper>
        <FilterIcon icon={faAward}/>
        <FilterOption>Most seller</FilterOption>
      </FilterWrapper>
      <FilterWrapper>
        <FilterIcon icon={faCouch}/>
        <FilterOption>Parlor</FilterOption>
      </FilterWrapper>
    </FilterAreaContainer>
  );
}

export default Filter
