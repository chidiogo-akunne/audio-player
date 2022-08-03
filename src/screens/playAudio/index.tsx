import { Image, TouchableOpacity } from 'react-native';
import { DataType } from 'typings/types';
import { RFValue } from 'react-native-responsive-fontsize';
import Ratings from '@components/starRating';

import { Container } from './styles';

interface PlayAudioProp {
  route: {
    params: { item: DataType };
  };
}

export default function AudioScreen(props: PlayAudioProp) {
  const {
    route: { params }
  } = props;
  const { item } = params;
  return (
    <Container>
      <TouchableOpacity>
        <Image
          source={{
            uri: item?.cover
          }}
          style={{
            resizeMode: 'cover',
            width: '95%',
            height: RFValue(250),
            alignSelf: 'center'
          }}
        />
      </TouchableOpacity>
      <Ratings starSize={50} style={{ alignSelf: 'center' }} />
    </Container>
  );
}
