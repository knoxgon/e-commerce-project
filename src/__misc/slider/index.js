import React from 'react';
import { Image, ImageWrapper } from './style';
import { cherryPickAssets } from '../../component/Navbar/containers/sublinks';

const ImageSlider = (props) => {
  return (
    <ImageWrapper>
      {props.targetId != null && cherryPickAssets(props.targetId).map(img => {
        return <Image src={img}/>
      })}
    </ImageWrapper>)
}

export default ImageSlider;
