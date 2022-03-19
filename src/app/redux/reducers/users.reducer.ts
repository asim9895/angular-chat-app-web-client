import { Action } from '@ngrx/store';
import * as UserActions from '../actions/users.actions';

const initialState = {
  user: null,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UserActions.SAVE_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
