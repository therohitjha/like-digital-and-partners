import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import Card from '../common-components/Card';
import {
  brandA,
  brandB,
  defaultBgColor,
  defaultTextColor,
} from '../utility/constant';

const QuoteBlock = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Card
      componentBackgroundColor={theme === brandA ? brandA : brandB}
      underlineColor={theme === brandA ? brandA : brandB}
      brandButtonColor={theme === brandA ? brandA : brandB}
      textBoxBackgroundColor={defaultBgColor}
      textColor={defaultTextColor}
      hideUnderline={false}
    />
  );
};

export default QuoteBlock;
