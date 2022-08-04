import { useMemo, Fragment } from 'react';
import AudioCard from '@components/audioCard';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useQuery } from 'react-query';
import { getAudio } from '@app/network/queries';
import { ActivityIndicator, Text } from 'react-native-paper';
import { useAppTheme } from '@app/theme';

import { Container } from './styles';

export default function HomeScreen() {
  const { colors, fonts } = useAppTheme();

  //fetch audio data using useQuery
  const { isLoading, data } = useQuery('audio', getAudio, {
    //auto refetch query every 1minute
    refetchInterval: 60000
  });

  const _renderItem = useMemo(
    () => ({ item }: any) => {
      return <AudioCard item={item} />;
    },
    []
  );
  const _renderEmptyComponent = useMemo(
    () => () => {
      return (
        <Fragment>
          {isLoading ? (
            <ActivityIndicator
              animating={true}
              size={RFValue(40)}
              color={colors.BLACK}
              style={{ marginTop: 'auto', marginBottom: 'auto' }}
            />
          ) : (
            <Text>No audio found</Text>
          )}
        </Fragment>
      );
    },
    [isLoading]
  );

  return (
    <Container>
      <FlatList
        data={data?.data}
        keyExtractor={(item) => {
          return item.title;
        }}
        showsVerticalScrollIndicator={true}
        renderItem={_renderItem}
        ListEmptyComponent={_renderEmptyComponent}
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
