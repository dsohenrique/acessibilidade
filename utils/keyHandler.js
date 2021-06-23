import { navigate } from './pageNavigation';

export const keyHandler = (evt, history, nextPage, prevPage) => {
  let choosedSelector;
  const { key } = evt;
  switch (key) {
    case '1':
      console.log('1', key);
      choosedSelector = key;
      break;
    case '2':
      console.log('2', key);
      choosedSelector = key;
      break;
    case 'Enter':
      console.log(nextPage);
      nextPage && navigate(history, nextPage);
      break;
    case 'Backspace':
      prevPage && navigate(history, prevPage);
      break;
    default:
      console.log('default', key);
      choosedSelector = key;
      break;
  }
  return choosedSelector;
};
