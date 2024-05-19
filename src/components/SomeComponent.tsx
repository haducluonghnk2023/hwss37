// SomeComponent.js

import React, { useContext } from 'react';
import ThemeContext from './Hw1';

const SomeComponent = () => {
  const { color } = useContext(ThemeContext);

  return (
    <div style={{ color: color }}>
      The current theme color is {color}.
    </div>
  );
};

export default SomeComponent;
