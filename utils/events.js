import React, { useEffect } from 'react';

export const useWindowEvent = (event, callback) => {
  useEffect(() => {
    console.log('useeffect', event, callback);
    window.addEventListener(event, callback);

    return () => {
      console.log('unmount');
      return window.removeEventListener(event, callback);
    };
  }, [event, callback]);
};

export const globalKeyUp = callback => {
  return useWindowEvent('keyup', callback);
};
