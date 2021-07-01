import React, { useState, useEffect } from 'react';

export const useWindowEvent = (event, callback) => {
  useEffect(() => {
    console.log('useeffect', event, 'asdasdas', callback);
    window.addEventListener(event, callback);
    return () => window.removeEventListener(event, callback);
  }, [event, callback]);
};

export const globalKeyUp = callback => {
  return useWindowEvent('keyup', callback);
};
