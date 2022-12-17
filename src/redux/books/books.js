// action_tpes
const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';

const initialState = {
  books: [],
};

// action creators
export const bookAdd = (book) => ({
  type: BOOK_ADDED,
  book,
});

export const bookRemove = () => ({
  type: BOOK_REMOVED,
});

// reducers
export default function bookreducer(state = initialState, action) {
  switch (action.type) {
    case BOOK_ADDED:
      return {
        type: BOOK_ADDED,
        state: [...state],
        payload: true,

      };
    case BOOK_REMOVED:
      return {
        type: BOOK_REMOVED,
      };

    default:
      return state;
  }
}
