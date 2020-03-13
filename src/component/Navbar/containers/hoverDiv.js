import React, { useState } from 'react';
import { Container, SubLink, InnerWrapper, ImageSlideContainer } from './style';
import Imager from '../../../__misc/slider/'
import { dedicateLinkPage } from './sublinks';

export const HoveredContainer = ({sentId}) => {
  const [hover, setHover] = useState(false)

  const mousehoveron = () => setHover(true)
  const mousehoveroff = () => setHover(false)

  return (
    <Container onMouseEnter={mousehoveron} onMouseLeave={mousehoveroff} >
      <InnerWrapper>
        {dedicateLinkPage(sentId).map((item, i) => {
          return <SubLink to={item.route} key={i}>{item.name}</SubLink>
        })}
      </InnerWrapper>
      <ImageSlideContainer>
        {hover && <Imager targetId={sentId} isHovering={hover}/>}
      </ImageSlideContainer>
    </Container>
  )
}
