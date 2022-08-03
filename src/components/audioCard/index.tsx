import { TouchableOpacity, Image } from 'react-native';
import Favorite from '../favorite';
import Ratings from '../starRating';

import {
  Container,
  UpperCover,
  RatingCover,
  LowerCover,
  Title,
  FavoriteCover
} from './styles';

export default function AudioCard() {
  return (
    <TouchableOpacity>
      <Container>
        <UpperCover>
          <RatingCover>
            <Ratings />
          </RatingCover>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/Learnfield-GmbH/CodingChallange/master/shared/simple%20audio%20player/data/Oceansound.png'
            }}
            style={{
              resizeMode: 'cover',
              width: '100%',
              height: '100%'
            }}
          />
        </UpperCover>
        <LowerCover>
          <Title>Song 1</Title>
          <FavoriteCover>
            <Favorite />
          </FavoriteCover>
        </LowerCover>
      </Container>
    </TouchableOpacity>
  );
}
