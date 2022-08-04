import Favorite from '@components/favorite';
import renderer from 'react-test-renderer';
import ThemeProvider from '@theme';
import { fireEvent, render } from '@testing-library/react-native';
import { ContextThemeProvider } from '@context/index';
import { mockedData } from '../../../__mocks__/mockedData';

describe('Favorite', () => {
  const tree = renderer.create(
    <ThemeProvider>
      <ContextThemeProvider>
        <Favorite item={mockedData} />
      </ContextThemeProvider>
    </ThemeProvider>
  );
  it(`renders correctly`, () => {
    expect(tree).toMatchSnapshot();
  });
  it(`it's clikable`, async () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider>
        <ContextThemeProvider>
          <Favorite item={mockedData} />
        </ContextThemeProvider>
      </ThemeProvider>
    );
    await fireEvent.press(getByTestId('favorite'));
    expect(onPressMock.mock.calls.length);
  });
});
