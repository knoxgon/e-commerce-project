import React, { useState } from 'react';
import { SlideWrapper, ImageElement, SlideContainer } from './style';


const GenericSlideShow = (props) => {
  const [imgs] = useState([
    require("../../assets/home/parlortrailer3.png"),
    require("../../assets/home/parlortrailer2.png"),
    require("../../assets/home/parlortrailer.png")
  ]);
  return (
    <SlideWrapper>
      <SlideContainer>
        {imgs.map((elem, i) => {
          return <ImageElement key={i} src={elem}/>
        })}
      </SlideContainer>
    </SlideWrapper>
  );
}

export default GenericSlideShow
