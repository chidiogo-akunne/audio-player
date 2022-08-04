import HomeScreen from '@screens/home';
import renderer from 'react-test-renderer';
import ThemeProvider from '@theme';
import { ContextThemeProvider } from '@context/index';
import { QueryClient, QueryClientProvider } from 'react-query';

jest.useFakeTimers();

// Create a react queultry client
const queryClient = new QueryClient();

describe('Home', () => {
  const tree = renderer.create(
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ContextThemeProvider>
          <HomeScreen />
        </ContextThemeProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
  it(`renders correctly`, async () => {
    await expect(tree).toMatchSnapshot();
  });
});
