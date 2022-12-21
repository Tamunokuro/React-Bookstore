import { v4 as uuidv4 } from 'uuid';

// action_tpes
const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';

export const initialState = [
  { id: uuidv4(), title: 'Daniel Fracis Adventure', author: 'Danny Brown' },
  { id: uuidv4(), title: 'Harry Potter', author: 'Timothy Brent' },
];

// action creators
export function bookAdd(book) {
  return {
    type: BOOK_ADDED,
    payload: {
      book,
    },
  };
}

export const bookRemove = (id) => ({
  type: BOOK_REMOVED,
  payload: {
    id,
  },
});

// reducers
export default function bookreducer(state = initialState, action) {
  switch (action.type) {
    case BOOK_ADDED:
      return [
        ...state, action.payload.book,
      ];
    case BOOK_REMOVED:
      return [
        ...state.filter((book) => book.id !== action.payload.id),
      ];

    default:
      return state;
  }
}
