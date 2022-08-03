import { Image, TouchableOpacity } from 'react-native';
import { DataType } from 'typings/types';
import { RFValue } from 'react-native-responsive-fontsize';
import Ratings from '@components/starRating';
import { Audio } from 'expo-av';
import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import Slider from '@components/slider';
import { millisecondToSeconds } from '@utils/timeFormatter';

import { Container, Text } from './styles';

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
  const isFocused = useIsFocused();
  const [sound, setSound] = useState();
  const [isPlaying, setisPlaying] = useState(false);
  const [state, setState] = useState({
    isBuffering: false,
    durationMillis: 1,
    positionMillis: 0,
    isSeeking: false
  });

  const { positionMillis, durationMillis } = state;
  const positionSeconds = millisecondToSeconds(positionMillis);
  const durationSeconds = millisecondToSeconds(durationMillis);

  const loadSound = async () => {
    const source = { uri: item.audio };
    const playbackObject = await new Audio.Sound();
    const status = {
      shouldPlay: isPlaying
    };
    playbackObject.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    await playbackObject.loadAsync(source, status, true);
    setSound(playbackObject);
  };

  const Playpause = async () => {
    isPlaying ? await sound?.pauseAsync() : await sound?.playAsync();
    setisPlaying(!isPlaying);
  };

  const onPlaybackStatusUpdate = (status) => {
    console.log('status4', status);
    setState({
      ...state,
      isBuffering: status.isBuffering,
      durationMillis: status.durationMillis,
      positionMillis: status.positionMillis
    });
  };

  const onSlidingComplete = async (value) => {
    const currentDuration = value * durationMillis;
    setState({
      ...state,
      positionMillis: Math.floor(currentDuration)
    });
  };

  useEffect(() => {
    loadSound();
  }, []);

  useEffect(() => {
    if (!isFocused) {
      setisPlaying(false);
      sound?.unloadAsync();
    }
  }, [isFocused]);

  return (
    <Container>
      <TouchableOpacity onPress={Playpause}>
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
      <Slider
        positionMillis={positionMillis}
        durationMillis={durationMillis}
        onSlidingComplete={(value) => onSlidingComplete(value)}
      />
      <Text>{`${positionSeconds}/${durationSeconds}`}</Text>
      <Ratings starSize={60} style={{ alignSelf: 'center' }} />
    </Container>
  );
}
