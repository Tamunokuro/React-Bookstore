// action types
const STATUS_CHECKED = 'STATUS_CHECKED';

const initialState = [];

// action creators
export const checkStatus = (status) => ({
  type: STATUS_CHECKED,
  payload: status,
});

// reducers
export default function categoryreducer(state = initialState, action) {
  switch (action.type) {
    case STATUS_CHECKED:
      return [
        'Under Construction',
      ];
    default:
      return state;
  }
}
