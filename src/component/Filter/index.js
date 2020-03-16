import React from 'react';
import { FilterAreaContainer, FilterWrapper, FilterOption, FilterIcon } from './style';
import { faStar, faAward, faCouch, faUtensilSpoon, faDollarSign, faChild, faBed } from '@fortawesome/free-solid-svg-icons';

const Filter = (props) => {

  return (
    <FilterAreaContainer>
      <FilterWrapper>
        <FilterIcon icon={faAward}/>
        <FilterOption>Most seller</FilterOption>
      </FilterWrapper>
      <FilterWrapper>
        <FilterIcon icon={faStar}/>
        <FilterOption>Popular</FilterOption>
      </FilterWrapper>
      <FilterWrapper>
        <FilterIcon icon={faDollarSign}/>
        <FilterOption>Deals</FilterOption>
      </FilterWrapper>
      <FilterWrapper>
        <FilterIcon icon={faCouch}/>
        <FilterOption>Parlor</FilterOption>
      </FilterWrapper>
      <FilterWrapper>
        <FilterIcon icon={faBed}/>
        <FilterOption>Bedroom</FilterOption>
      </FilterWrapper>
      <FilterWrapper>
        <FilterIcon icon={faUtensilSpoon}/>
        <FilterOption>Kitchen</FilterOption>
      </FilterWrapper>
      <FilterWrapper>
        <FilterIcon icon={faChild}/>
        <FilterOption>Juvenile</FilterOption>
      </FilterWrapper>
    </FilterAreaContainer>
  );
}

export default Filter
