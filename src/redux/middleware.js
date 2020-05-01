import { CREATE_POST } from './types';
import { showAlert } from './actions';

const forbiddenWords = [
  'fuck'
];

export function forbiddenWordsMiddleware({ dispatch }) {
  return (next) => (action) => {
    if (action.type === CREATE_POST) {
      const found = forbiddenWords.filter((word) => (
        action.payload.title.includes(word)
      ))

      if (found.length > 0) {
        return dispatch(showAlert('Вы спамер!'))
      }
    }

    return next(action);
  };
}
