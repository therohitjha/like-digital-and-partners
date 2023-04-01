import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeProvider';
import Card from '../common-components/Card';
import { brandA, brandB } from '../utility/constant';

const QuoteBlock = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Card
      componentBackgroundColor={theme === brandA ? brandA : brandB}
      underlineColor={theme === brandA ? brandA : brandB}
      brandButtonColor={theme === brandA ? brandA : brandB}
      textBoxBackgroundColor={'FFFFFF'}
      textColor={'282828'}
      hideUnderline={false}
    />
  );
};

export default QuoteBlock;
