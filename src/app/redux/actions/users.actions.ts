import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

export const SAVE_USER = 'SAVE_USER';

export class SaveUser implements Action {
  readonly type = SAVE_USER;

  constructor(public payload: any) {}
}

export type Actions = SaveUser;
