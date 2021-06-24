import React from 'react';
import './styles';

export const Hint = ({ title, description }) => {
  return (
    <div className="hint-wrapper">
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      <div
        tabIndex="0"
        className="close"
        onClick={() =>
          (document.querySelector('.hint-wrapper').style.opacity = '0')
        }
      >
        <div id="mdiv">
          <div class="mdiv">
            <div class="md" />
          </div>
        </div>
      </div>
    </div>
  );
};
