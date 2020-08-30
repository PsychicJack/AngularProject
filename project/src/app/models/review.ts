export interface IReview {
  id: number;
  restaurantID: number;
  userID: number;
  comment: string;
  timeOfVisit: string;
  rating: number;
}

export class Review implements IReview {
  public id: number;
  public restaurantID: number;
  public userID: number;
  public comment: string;
  public timeOfVisit: string;
  public rating: number;
  constructor() {}
}
