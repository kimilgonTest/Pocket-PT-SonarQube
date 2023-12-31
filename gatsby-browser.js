import './src/styles/global.css';
import '@stackflow/plugin-basic-ui/index.css';

import React from 'react';
import RootElement from './src/components/root-element';

export const wrapRootElement = ({ element }) => {
  console.log('browser.js wrapRootElement');
  return <RootElement>{element}</RootElement>;
};
