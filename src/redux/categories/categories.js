// action types
const STATUS_CHECKED = 'STATUS_CHECKED';

const initialState = {
  categories: [],
};

// action creators
export const checkStatus = () => ({
  type: STATUS_CHECKED,
});

// reducers
export default function categoryreducer(state = initialState, action) {
  switch (action.type) {
    case STATUS_CHECKED:
      return {
        type: STATUS_CHECKED,
        payload: 'Under Construction',

      };
    default:
      return state;
  }
}
