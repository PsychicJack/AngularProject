import { IReview } from '../models/review.model';
import { ReviewAction, REVIEW_TYPES } from '../actions/review.actions';

export interface ReviewState {
  list: IReview[];
  loading: boolean;
  error: Error;
}

const initalState: ReviewState = {
  list: [],
  loading: false,
  error: undefined,
};

export function ReviewReducer(
  state: ReviewState = initalState,
  action: ReviewAction
) {
  switch (action.type) {
    //ADD
    case REVIEW_TYPES.ADD_REVIEW:
      return { ...state, loading: true };
    case REVIEW_TYPES.ADD_REVIEW_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
      };
    case REVIEW_TYPES.ADD_REVIEW_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    //REMOVE
    case REVIEW_TYPES.REMOVE_REVIEW:
      return { ...state, loading: true };
    case REVIEW_TYPES.REMOVE_REVIEW_SUCCESS:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
        loading: false,
      };
    case REVIEW_TYPES.REMOVE_REVIEW_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case REVIEW_TYPES.LOAD_REVIEWS:
      return { ...state, loading: true };
    case REVIEW_TYPES.LOAD_REVIEWS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case REVIEW_TYPES.LOAD_REVIEWS_SUCCESS:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
