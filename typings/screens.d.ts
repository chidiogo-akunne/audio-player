import { StackNavigationProp, RouteProp } from '@react-navigation/stack';
import { StackActionHelpers } from '@react-navigation/native';

// App Navigation prop types
export type RootStackParamList = {
  SplashScreen?: Object;
  HomeScreen?: Object;
  BaseScreen?: Object;
};

export type RootStackParamScreensList =
  | 'SplashScreen'
  | 'HomeScreen'
  | 'BaseScreen';

interface StackScreenInterface extends StackActionHelpers {
  navigation: StackNavigationProp<RootStackParamList, string>;
  route: RouteProp<RootStackParamList, string>;
}

export interface NavigationInterface extends StackScreenInterface {
  navigate: any;
  testID?: string;
}
