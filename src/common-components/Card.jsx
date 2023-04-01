import React from 'react';
import { Link } from 'react-router-dom';
import dummyData from '../utility/data';
import '../styles/common-components/card.scss';

export default function Card({
  componentBackgroundColor,
  textBoxBackgroundColor,
  textColor,
  underlineColor,
  hideUnderline,
  brandButtonColor,
}) {
  const {
    title,
    subTitle,
    description,
    ctaLinks,
    hideUnderline: hideLine,
  } = dummyData;
  const isUnderline =
    hideUnderline !== undefined ? hideUnderline : hideLine;

  return (
    <div className={`container background-color--${componentBackgroundColor}`}>
      <div className={`card-container background-color--${textBoxBackgroundColor} text-color--${textColor}`}>
        <div className="card-left">
          <div className="title">{title}</div>
          <div className="sub-title">{subTitle}</div>
          {!isUnderline && (
            <div className={`underline underline--${underlineColor}`}></div>
          )}
        </div>
        <div className="card-right">
          <div>{description}</div>
          <div className="button-container">
            {ctaLinks.map(({ link, text }, index) => {
              return (
                <Link
                  to={link}
                  target={'_blank'}
                  className={`button${index}--${brandButtonColor}`}
                  key={text + index}
                >
                  {text}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
