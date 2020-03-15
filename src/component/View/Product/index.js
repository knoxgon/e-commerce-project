import React from 'react';
import { ProductWrapper, ContentTitle, ProductFavorite, ProductFavoriteWrapper, ProductBoxTagBlur, ProductBoxTitle, ProductImageWrapper, ProductBox, ProductContainer, ProductBoxImage, ProductBoxBlur, ProductBoxTag, ProductPriceTag, ProductCart } from './style';
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
  return (
    <ProductContainer>
      <ContentTitle>Popular</ContentTitle>
      <ProductWrapper>

        <ProductBox>
          <ProductImageWrapper>
            <ProductBoxImage src={require('../../../assets/bedroom/bedroom2.jpg')}/>
            <ProductBoxBlur/>
            <ProductBoxTitle>Rosefield Luxury</ProductBoxTitle>
            <ProductBoxTagBlur/>
            <ProductBoxTag>
              <ProductCart icon={faCartPlus}></ProductCart>
              <ProductPriceTag>$384</ProductPriceTag>
            </ProductBoxTag>
            <ProductFavoriteWrapper>
              <ProductFavorite icon={faHeart}></ProductFavorite>
            </ProductFavoriteWrapper>
          </ProductImageWrapper>
        </ProductBox>

      </ProductWrapper>
    </ProductContainer>
  )
}

