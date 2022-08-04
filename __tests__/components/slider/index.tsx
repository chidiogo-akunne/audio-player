import Slider from '@components/slider';
import renderer from 'react-test-renderer';
import ThemeProvider from '@theme';
import { ContextThemeProvider } from '@context/index';

jest.useFakeTimers();

const onPressMock = jest.fn();

describe('Slider', () => {
  const tree = renderer.create(
    <ThemeProvider>
      <ContextThemeProvider>
        <Slider
          positionMillis={0}
          durationMillis={23456}
          onSlidingComplete={onPressMock}
        />
      </ContextThemeProvider>
    </ThemeProvider>
  );
  it(`renders correctly`, async () => {
    await expect(tree).toMatchSnapshot();
  });
});
