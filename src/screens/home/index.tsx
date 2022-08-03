import { useMemo } from 'react';
import AudioCard from '@components/audioCard';
import manifestData from '@utils/manifest.json';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { Container } from './styles';

export default function HomeScreen() {
  const data = manifestData.data;

  const _renderItem = useMemo(
    () => ({ item }: any) => {
      return <AudioCard item={item} />;
    },
    []
  );
  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={(item) => {
          return item.title;
        }}
        showsVerticalScrollIndicator={true}
        renderItem={_renderItem}
        style={{
          width: '100%',
          marginTop: RFValue(10)
        }}
        contentContainerStyle={{
          paddingHorizontal: RFValue(15),
          paddingBottom: RFValue(100)
        }}
      />
    </Container>
  );
}
