import { cleanup } from '@testing-library/react-native';

const mockedDispatch = jest.fn();

// Mocks react-navigation
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch
    }),
    useIsFocused: jest.fn()
  };
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// RESET ALL MOCKS AFTER EVERY TEST
afterEach(jest.resetAllMocks);

// CLEAN UP VIRTUAL TEST DOM AFTER ALL TEST
afterAll(cleanup);
