import AudioScreen from '@screens/playAudio';
import renderer from 'react-test-renderer';
import ThemeProvider from '@theme';
import { ContextThemeProvider } from '@context/index';
import { QueryClient, QueryClientProvider } from 'react-query';
import { mockedData } from '__mocks__/mockedData';
import { waitFor } from '@testing-library/react-native';

jest.useFakeTimers();

// Create a react queultry client
const queryClient = new QueryClient();

const route = {
  params: {
    item: mockedData
  }
};

describe('Audio Player', () => {
  const tree = renderer.create(
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ContextThemeProvider>
          <AudioScreen route={route} />
        </ContextThemeProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );

  it(`renders correctly`, () => {
    waitFor(async () => {
      await expect(tree).toMatchSnapshot();
    });
  });
});
