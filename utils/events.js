import React, { useEffect } from 'react';

export const useWindowEvent = (event, callback) => {
  useEffect(() => {
    window.addEventListener(event, callback);

    return () => {
      return window.removeEventListener(event, callback);
    };
  }, [event, callback]);
};

export const globalKeyUp = callback => {
  return useWindowEvent('keyup', callback);
};
