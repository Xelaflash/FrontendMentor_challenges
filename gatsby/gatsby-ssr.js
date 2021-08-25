import React from 'react';
import './src/styles/global.css';
import GlobalStyles from './src/styles/GlobalStyles';
import Fonts from './src/styles/Fonts';
import 'normalize.css';

export function wrapPageElement({ element }) {
  return (
    <>
      <GlobalStyles />
      <Fonts />
      {element}
    </>
  );
}
