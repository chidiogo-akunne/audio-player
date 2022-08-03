import { TouchableOpacity, Image } from 'react-native';
import Favorite from '../favorite';
import Ratings from '../starRating';
import { DataType } from 'typings/types';

import {
  Container,
  UpperCover,
  RatingCover,
  LowerCover,
  Title,
  FavoriteCover
} from './styles';

interface AudioCardProp {
  item: DataType;
}

export default function AudioCard({ item }: AudioCardProp) {
  const { title, cover } = item;
  return (
    <TouchableOpacity>
      <Container>
        <UpperCover>
          <RatingCover>
            <Ratings />
          </RatingCover>
          <Image
            source={{
              uri: cover
            }}
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: '100%'
            }}
          />
        </UpperCover>
        <LowerCover>
          <Title>{title}</Title>
          <FavoriteCover>
            <Favorite />
          </FavoriteCover>
        </LowerCover>
      </Container>
    </TouchableOpacity>
  );
}
