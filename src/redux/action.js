import { UPDATE_USERNAME } from './actionTypes';

export const updateUserName = (data) => {
  return {
    type: UPDATE_USERNAME,
    payload: data,
  };
};

export const updatePickup = (data) => {
  return {
    type: 'UPDATE_PICKUP',
    payload: data,
  };
};
