import React from 'react';
import { ProductWrapper, ContentTitle, ProductFavorite, ProductFavoriteWrapper, ProductBoxTagBlur, ProductBoxTitle, ProductImageWrapper, ProductBox, ProductContainer, ProductBoxImage, ProductBoxBlur, ProductBoxTag, ProductPriceTag, ProductCart } from './style';

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
          </ProductImageWrapper>
        </ProductBox>

      </ProductWrapper>
    </ProductContainer>
  )
}

