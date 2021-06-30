import { navigate } from './pageNavigation';

export const keyHandler = (evt, history, nextPage, prevPage) => {
  let choosedSelector;
  const { key } = evt;
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

    case 'Backspace':
      prevPage && navigate(history, prevPage);
      break;
    default:
      choosedSelector = '';
      break;
  }
  return choosedSelector;
};
