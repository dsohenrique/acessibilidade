import { navigate } from './pageNavigation';

export const keyHandler = (key, history, nextPage, prevPage) => {
  let choosedSelector;
  console.log(nextPage, prevPage);
  switch (key) {
    case '1':
      choosedSelector = '1';
      break;
    case '2':
      choosedSelector = '2';
      break;
    case '3':
      choosedSelector = '3';
      break;
    case '4':
      choosedSelector = '4';
      break;
    case 'ArrowRight':
      nextPage && navigate(history, nextPage);
      break;
    case 'Backspace':
      console.log('sending to ', prevPage);
      prevPage && navigate(history, prevPage);
      break;
    default:
      break;
  }
  return choosedSelector;
};
