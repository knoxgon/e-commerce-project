import React from 'react';
import { Container } from './style';

export const HoveredContainer = ({hoverValue, listItems}) => {
  return (
    <React.Fragment>
      {listItems.map((item, i) => {
        return <Container key={i} ifHover={hoverValue}>
          <p>{item.description}</p>
        </Container>
      })}
    </React.Fragment>
  )
}
