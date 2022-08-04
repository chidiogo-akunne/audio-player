import AudioCard from '@components/audioCard';
import renderer from 'react-test-renderer';
import ThemeProvider from '@theme';
import { ContextThemeProvider } from '@context/index';
import { mockedData } from '../../../__mocks__/mockedData';
import { fireEvent, render } from '@testing-library/react-native';

describe('Audio Card', () => {
  const tree = renderer.create(
    <ThemeProvider>
      <ContextThemeProvider>
        <AudioCard item={mockedData} />
      </ContextThemeProvider>
    </ThemeProvider>
  );
  it(`renders correctly`, async () => {
    await expect(tree).toMatchSnapshot();
  });
  it(`navigates to play audio screen`, async () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider>
        <ContextThemeProvider>
          <AudioCard item={mockedData} />
        </ContextThemeProvider>
      </ThemeProvider>
    );
    await fireEvent.press(getByTestId('audioCard'));
    expect(onPressMock.mock.calls.length);
  });
});
