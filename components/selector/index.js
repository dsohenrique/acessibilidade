import React from 'react';
import './styles';

export const Selector = ({ keyNumber, icon, value, date, selected, color }) => {
  return (
    <div
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
      <div className="keyNumber">{keyNumber}</div>
      {icon && <span className="icon">{icon}</span>}
      <span className="value">{value}</span>
      {date && <span className="date">{date}</span>}
      <div className="color" style={{backgroundColor= color}}/>
    </div>
  );
};
