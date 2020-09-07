import { Action } from '@ngrx/store';
import { IReview } from '../models/review.model';

export enum REVIEW_TYPES {
  ADD_REVIEW =            '[REVIEW] Add',
  ADD_REVIEW_SUCCESS =    '[REVIEW] Add Success',
  ADD_REVIEW_FAILURE =    '[REVIEW] Add Failure',
  REMOVE_REVIEW =         '[REVIEW] Remove',
  REMOVE_REVIEW_SUCCESS = '[REVIEW] Remove Success',
  REMOVE_REVIEW_FAILURE = '[REVIEW] Remove Failure',
  LOAD_REVIEWS =          '[REVIEW] Load',
  LOAD_REVIEWS_SUCCESS =  '[REVIEW] Load Success',
  LOAD_REVIEWS_FAILURE =  '[REVIEW] Load Failure',
}

export class AddReview implements Action {
  readonly type = REVIEW_TYPES.ADD_REVIEW;
  constructor(public payload: IReview) {}
}
export class AddReviewSuccess implements Action {
  readonly type = REVIEW_TYPES.ADD_REVIEW_SUCCESS;
  constructor(public payload: IReview) {}
}

export class AddReviewFailure implements Action {
  readonly type = REVIEW_TYPES.ADD_REVIEW_FAILURE;
  constructor(public payload: Error) {}
}

export class RemoveReview implements Action {
  readonly type = REVIEW_TYPES.REMOVE_REVIEW;
  constructor(public payload: number) {}
}

export class RemoveReviewSuccess implements Action {
  readonly type = REVIEW_TYPES.REMOVE_REVIEW_SUCCESS;
  constructor(public payload: number) {}
}

export class RemoveReviewFailure implements Action {
  readonly type = REVIEW_TYPES.REMOVE_REVIEW_FAILURE;
  constructor(public payload: Error) {}
}

export class LoadReview implements Action {
  readonly type = REVIEW_TYPES.LOAD_REVIEWS;
  constructor(public payload: number) {}
}

export class LoadReviewSuccess implements Action {
  readonly type = REVIEW_TYPES.LOAD_REVIEWS_SUCCESS;
  constructor(public payload: IReview[]) {}
}

export class LoadReviewFailure implements Action {
  readonly type = REVIEW_TYPES.LOAD_REVIEWS_FAILURE;
  constructor(public payload: Error) {}
}

export type ReviewAction =
  | AddReview
  | AddReviewSuccess
  | AddReviewFailure
  | RemoveReview
  | RemoveReviewSuccess
  | RemoveReviewFailure
  | LoadReview
  | LoadReviewSuccess
  | LoadReviewFailure;
