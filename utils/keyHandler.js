import { navigate } from './pageNavigation';

export const keyHandler = (evt, history, nextPage, prevPage) => {
  let choosedSelector;
  const { key } = evt;
  switch (key) {
    case '1':
      choosedSelector = key;
      break;
    case '2':
      choosedSelector = key;
      break;
    case '3':
      choosedSelector = key;
      break;
    case '4':
      choosedSelector = key;
      break;

    case 'Backspace':
      prevPage && navigate(history, prevPage);
      break;
    default:
      choosedSelector = key;
      break;
  }
  return choosedSelector;
};
