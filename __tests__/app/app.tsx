import React from 'react';
import renderer from 'react-test-renderer';
import App from '../../App';

jest.useFakeTimers();

jest.mock('react-native-screens', () => ({
  ...jest.requireActual('react-native-screens'),
  enableScreens: jest.fn()
}));

describe('<App />', () => {
  it('renders correctly', async () => {
    //@ts-ignore
    const tree = renderer.create(<App />).toJSON();
    await expect(tree).toMatchSnapshot();
  });
});
