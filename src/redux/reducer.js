import { UPDATE_USERNAME } from './actionTypes';
const initialState = { name: '', pickup: '', desitValue: '' };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USERNAME:
      return { ...state, ...{ name: action.payload } };
    case 'UPDATE_PICKUP':
      return { ...state, ...{ pickup: action.payload } };
    default:
      return initialState;
  }
}
