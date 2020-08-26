export interface IReview{
    id:number;
    restaurantID: number;
    userID: number;
    comment: string;
    timeOfVisit: string;
    rating: number;
}