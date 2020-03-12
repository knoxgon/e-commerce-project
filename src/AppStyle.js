import React from 'react';
import {css, Global} from '@emotion/core'

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      html {
        width: 100%;
        height: 100%;
        background-color: #FBFBFB;
      }
      body {
        margin: 0;
      }
    `}></Global>
)
