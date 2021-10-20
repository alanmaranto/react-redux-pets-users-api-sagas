import { petTypes } from "../types/pets";
import { userTypes } from "../types/users";

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

export const getUsers = () => {
  return {
    type: userTypes.GET_USERS_REQUESTED,
  };
};
