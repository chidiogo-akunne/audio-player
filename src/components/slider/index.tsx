import Slider from '@react-native-community/slider';
import { RFValue } from 'react-native-responsive-fontsize';
import { useAppTheme } from '@app/theme';

import { Container } from './styles';

interface SliderProp {
  positionMillis: number;
  durationMillis: number;
  onSlidingComplete: (value: number) => void;
}

export default function SeekBar(props: SliderProp) {
  const { positionMillis, durationMillis, onSlidingComplete } = props;
  const { colors } = useAppTheme();
  const sliderValue = positionMillis / durationMillis;

  return (
    <Container testID={'slider'}>
      <Slider
        value={sliderValue || 0}
        minimumValue={0}
        maximumValue={1}
        onSlidingComplete={onSlidingComplete}
        minimumTrackTintColor={colors.GREY_DARK}
        maximumTrackTintColor={colors.GREY}
        style={{ width: '100%', height: RFValue(50) }}
      />
    </Container>
  );
}
