import { IReview } from './models/review.model';

export interface AppState {
  readonly review: IReview[];
}
