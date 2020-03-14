import React, { useState } from 'react';
import { Image, ImageWrapper } from './style';

const ImageSlider = (props) => {
  const [imageAssets] = useState([
    {
      PARLOR: [
        require("../../assets/trails/parlor/sofa.jpg"),
        require("../../assets/trails/parlor/cornersofa.jpg"),
        require("../../assets/trails/parlor/tv.jpg"),
        require("../../assets/trails/parlor/table.jpg")
      ]
    },
    {
      BEDROOM: [
        require("../../assets/trails/bedroom/cushion.jpg"),
        require("../../assets/trails/bedroom/mattress.jpg"),
        require("../../assets/trails/bedroom/chestbed.jpg"),
        require("../../assets/trails/bedroom/cushion2.jpg")
      ]
    },
    {
      KITCHEN: [
        require("../../assets/trails/kitchen/tableset.jpg"),
        require("../../assets/trails/kitchen/cabinet.jpg"),
        require("../../assets/trails/kitchen/shelf.jpg"),
        require("../../assets/trails/kitchen/cabinet2.jpg")
      ]
    },
    {
      KIDSROOM: [
        require("../../assets/trails/kidsroom/furnset.jpg"),
        require("../../assets/trails/kidsroom/desk.jpg"),
        require("../../assets/trails/kidsroom/furnchild.jpg"),
        require("../../assets/trails/kidsroom/furnset2.jpg")
      ]
    }
  ]);
  return (
    <ImageWrapper>
      {Object.values(imageAssets).filter(a => a[props.targetId])[0][props.targetId].map((img, i) => {
        return <Image key={i} src={img}/>
      })}
    </ImageWrapper>)
}

export default ImageSlider;
