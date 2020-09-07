import { IReview } from './models/review.model';
import { ReviewState } from './reducers/review.reducer';

export interface AppState {
  readonly review: ReviewState;
}
