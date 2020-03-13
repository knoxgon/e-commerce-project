import React, { useState } from 'react';
import { Container, SubLink, InnerWrapper, ImageSlideContainer } from './style';
import Imager from '../../../__misc/slider/'
import { dedicateLinkPage } from './sublinks';

export const HoveredContainer = ({sentId}) => {
  return (
    <Container>
      <InnerWrapper>
        {dedicateLinkPage(sentId).map((item, i) => {
          return <SubLink to={item.route} key={i}>{item.name}</SubLink>
        })}
      </InnerWrapper>
      <ImageSlideContainer>
        <Imager targetId={sentId}/>
      </ImageSlideContainer>
    </Container>
  )
}
