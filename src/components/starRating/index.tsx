import StarRating from 'react-native-star-rating-widget';
import { useAppTheme } from '@app/theme';
import { useState } from 'react';
import { ViewStyle } from 'react-native';

interface RatingProp {
  starSize?: number;
  style?: ViewStyle;
}

export default function Rating(props: RatingProp) {
  const { starSize = 30, style } = props;
  const { colors } = useAppTheme();
  const [rating, setRating] = useState(0);
  const ratingCompleted = (rate: number) => {
    setRating(rate);
  };
  return (
    <StarRating
      rating={rating}
      onChange={(rate: number) => ratingCompleted(rate)}
      maxStars={5}
      starSize={starSize}
      minRating={0}
      color={colors.BLACK}
      emptyColor={colors.BLACK}
      enableHalfStar={false}
      starStyle={{ marginRight: 0, marginLeft: 0 }}
      style={style}
    />
  );
}
