export interface DataType {
  title: string;
  audio: string;
  cover: string;
  totalDurationMs: number;
}

export interface StarRatingType {
  rating: {
    rate: number;
    tile: DataType;
  }[];
}

export type DataResponseType = {
  data: DataType[];
};
