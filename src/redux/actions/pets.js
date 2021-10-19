import { petTypes } from "../types/pets";

export const petIncrement = (number) => {
  return {
    type: petTypes.PET_INCREASED,
    payload: number,
  };
};

export const petDecrement = () => {
  return {
    type: petTypes.PET_DECREASED,
  };
};
