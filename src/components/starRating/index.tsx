import StarRating from 'react-native-star-rating-widget';
import { useAppTheme } from '@app/theme';
import { useState, useEffect } from 'react';
import { ViewStyle } from 'react-native';
import { DataType } from 'typings/types';
import Storage from '@libs/storage';
import { useIsFocused } from '@react-navigation/native';

interface RatingProp {
  starSize?: number;
  style?: ViewStyle;
  item: DataType;
  disabled?: boolean;
}

export default function Rating(props: RatingProp) {
  const { starSize = 30, style, item, disabled = false } = props;
  const isFocused = useIsFocused();
  const { colors } = useAppTheme();
  const [rating, setRating] = useState(0);

  const ratingCompleted = async (rate: number) => {
    if (disabled) return;
    setRating(rate);
    await Storage.setStarRating({ rating: [{ tile: item, rate }] });
  };

  const getStarRating = async () => {
    const getRating = await Storage.getStarRatings();
    if (!getRating) return;
    const starRating = JSON.parse(getRating!);
    const checkRating = starRating?.rating?.filter(
      (rating: any) => rating?.tile?.title === item?.title
    );
    if (checkRating?.length) {
      setRating(checkRating[0]?.rate);
    }
  };

  useEffect(() => {
    getStarRating();
  }, [isFocused]);

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
