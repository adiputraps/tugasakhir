
import type { Action } from '../actions/types';
import { SET_INDEX } from '../actions/list';

export type State = {
    list: string
}

const initialState = {
  list: [
    'Steam Wallet Rupiah',
    'Steam Wallet US',
    'Garena Voucher',
    'Megaxus Voucher',
    'Coin Line',
    'Amazone Voucher',
  ],
  selectedIndex: undefined,
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === SET_INDEX) {
    return {
      ...state,
      selectedIndex: action.payload,
    };
  }
  return state;
}
