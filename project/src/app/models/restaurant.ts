export interface IRestaurant {
  id: number;
  name: string;
  description: string;
  address: string;
  openTime: string;
  closeTime: string;
  location: string;
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
  public location: string;

  constructor() {}

  static copy(copy: IRestaurant, original: IRestaurant) {
    copy.id = original.id;
    copy.address = original.address;
    copy.description = original.description;
    copy.closeTime = original.closeTime;
    copy.openTime = original.openTime;
    copy.name = original.name;
    copy.location = original.location;
  }
}
