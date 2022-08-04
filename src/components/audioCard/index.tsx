import { TouchableOpacity, Image } from 'react-native';
import Favorite from '../favorite';
import Ratings from '../starRating';
import { DataType } from 'typings/types';
import { useNavigation } from '@react-navigation/native';
import { NavigationInterface } from 'typings/screens';

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
  const navigation = useNavigation<NavigationInterface>();
  return (
    <TouchableOpacity
      testID={'audioCard'}
      onPress={() => navigation.navigate('AudioScreen', { item })}
    >
      <Container>
        <UpperCover>
          <RatingCover>
            <Ratings disabled={true} item={item} />
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
            <Favorite item={item} />
          </FavoriteCover>
        </LowerCover>
      </Container>
    </TouchableOpacity>
  );
}
