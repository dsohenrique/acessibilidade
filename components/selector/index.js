import React from 'react';
import './styles';

export const Selector = ({
  keyNumber,
  icon,
  value,
  date,
  selected,
  color,
  border,
  tabIndex,
  ariaLabel,
  keyPressHandler
}) => {
  return (
    <div
      onKeyPress={keyPressHandler}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      id={keyNumber}
      className="selector"
      style={{ backgroundColor: selected && color }}
      onClick={({ target }) => {
        document.querySelectorAll('.selector').forEach(selector => {
          selector.style.backgroundColor =
            selector.id === target.id ? color : 'transparent';
        });
      }}
    >
      <div id={keyNumber} className="keyNumber">
        {keyNumber}
      </div>
      {icon && <span className="icon">{icon}</span>}
      <span id={keyNumber} className="value">
        {value}
      </span>
      {date && (
        <span id={keyNumber} className="date">
          {date}
        </span>
      )}
      {border && (
        <div
          id={keyNumber}
          className="color"
          style={{ backgroundColor: color }}
        />
      )}
    </div>
  );
};
