export interface IRestaurant {
  id: number;
  name: string;
  description: string;
  address: string;
  openTime: string;
  closeTime: string;
}

export class Restaurant implements IRestaurant {
  public id: number;
  public name: string;
  public description: string;
  public numberOfReviews: number;
  public averageReview: number;
  public address: string;
  public openTime: string;
  public closeTime: string;
}
