import { navigate } from './pageNavigation';

export const keyHandler = (key, history, nextPage, prevPage) => {
  let choosedSelector;
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
    case 'ArrowLeft':
      prevPage && navigate(history, prevPage);
      break;
    default:
      break;
  }
  return choosedSelector;
};
