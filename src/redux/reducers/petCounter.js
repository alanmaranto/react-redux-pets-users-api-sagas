import { petTypes } from "../types/pets";

const petCounter = (state = 0, action) => {
  switch (action.type) {
    case petTypes.PET_INCREASED:
      return state + action.payload;
    case petTypes.PET_DECREASED:
      return state - 1;
    default:
      return state;
  }
};

export default petCounter;
