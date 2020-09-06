import { IReview } from '../models/review.model';
import { ReviewAction, REVIEW_TYPES } from '../actions/review.actions';

const initalState: Array<IReview> = [
  {
    id: 0,
    comment: '',
    rating: 0,
    restaurantID: 0,
    userID: 0,
    timeOfVisit: '00:00',
  },
];

export function ReviewReducer(
  state: Array<IReview> = initalState,
  action: ReviewAction
) {
  switch (action.type) {
    case REVIEW_TYPES.ADD_REVIEW:
      return [...state, action.payload];
    default:
      return state;
  }
}
