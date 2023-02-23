import { FETCH_DATA } from "./actionTypes";

const init = {
  foods: null,
  loading: true,
};

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case FETCH_DATA:
      return { ...state, foods: payload, loading: false };

    default:
      return state;
  }
};
export default reducer;
