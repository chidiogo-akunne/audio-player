import StarRating from '@components/starRating';
import renderer from 'react-test-renderer';
import ThemeProvider from '@theme';
import { ContextThemeProvider } from '@context/index';
import { mockedData } from '__mocks__/mockedData';
import { fireEvent, render } from '@testing-library/react-native';

describe('Star rating', () => {
  const tree = renderer.create(
    <ThemeProvider>
      <ContextThemeProvider>
        <StarRating item={mockedData} />
      </ContextThemeProvider>
    </ThemeProvider>
  );
  it(`renders correctly`, async () => {
    await expect(tree).toMatchSnapshot();
  });
  it(`change rating`, async () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider>
        <ContextThemeProvider>
          <StarRating item={mockedData} />
        </ContextThemeProvider>
      </ThemeProvider>
    );
    await fireEvent.press(getByTestId('starRating'));
    expect(onPressMock.mock.calls.length);
  });
});
