export interface DataType {
  title: string;
  audio: string;
  cover: string;
  totalDurations: number;
}

export interface StarRatingType {
  rating: {
    rate: number;
    tile: DataType;
  }[];
}
