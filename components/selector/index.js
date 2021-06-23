import React from 'react';
import './styles';

export const Selector = ({ keyNumber, icon, value, date, selected, color }) => {
  return (
    <div className="selector" style={{ backgroundColor: selected && color }}>
      <div className="keyNumber">{keyNumber}</div>
      {icon && <span className="icon">{icon}</span>}
      <span className="value">{value}</span>
      {date && <span className="date">{date}</span>}
    </div>
  );
};
