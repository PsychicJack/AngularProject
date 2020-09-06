import { Action } from '@ngrx/store';
import { IReview } from '../models/review.model';

export enum REVIEW_TYPES {
  ADD_REVIEW = '[REVIEW] Add',
  REMOVE_REVIEW = '[REVIEW] Remove',
}

export class AddReview implements Action {
  readonly type = REVIEW_TYPES.ADD_REVIEW;
  constructor(public payload: IReview) {}
}

export class RemoveReview implements Action {
  readonly type = REVIEW_TYPES.ADD_REVIEW;
  constructor(public payload: IReview) {}
}

export type ReviewAction = AddReview | RemoveReview;
