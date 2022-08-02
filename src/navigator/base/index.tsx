import { createStackNavigator } from '@react-navigation/stack';
import Screens from '@app/screens';
import { useAppTheme } from '@app/theme';
import { GLOBAL_HEADER_STYLE } from '@app/constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { Text } from 'react-native';

const BaseStack = createStackNavigator();

export default function BaseNavigator() {
  const { colors, fonts } = useAppTheme();
  return (
    <BaseStack.Navigator>
      <BaseStack.Screen
        name="HomeScreen"
        component={Screens.HomeScreen}
        options={{
          headerLeft: () => null,
          headerTitle: () => {
            return (
              <Text
                style={{
                  color: colors.GREY_DARK,
                  fontSize: RFValue(fonts.LARGE_SIZE + 5),
                  fontFamily: fonts.POPPINS_MEDIUM
                }}
              >
                Skoovin
              </Text>
            );
          },
          headerStyle: GLOBAL_HEADER_STYLE
        }}
      />
    </BaseStack.Navigator>
  );
}
