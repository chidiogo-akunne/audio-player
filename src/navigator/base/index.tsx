import { createStackNavigator } from '@react-navigation/stack';
import Screens from '@app/screens';
import { useAppTheme } from '@app/theme';
import { GLOBAL_HEADER_STYLE } from '@app/constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

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
                  color: colors.BLACK,
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
      <BaseStack.Screen
        name="AudioScreen"
        component={Screens.AudioScreen}
        options={({ navigation, route }) => ({
          headerTitle: () => {
            return (
              <Text
                style={{
                  color: colors.BLACK,
                  fontSize: RFValue(fonts.LARGE_SIZE + 5),
                  fontFamily: fonts.POPPINS_MEDIUM
                }}
              >
                {
                  //@ts-ignore
                  route.params?.item?.title
                }
              </Text>
            );
          },
          headerBackTitleVisible: false,
          headerLeft: () => (
            <TouchableOpacity onPress={navigation?.goBack}>
              <Feather
                name="chevron-left"
                size={RFValue(30)}
                color={colors.GREY_DARK}
              />
            </TouchableOpacity>
          ),
          headerLeftContainerStyle: { marginLeft: RFValue(15) },
          headerStyle: GLOBAL_HEADER_STYLE
        })}
      />
    </BaseStack.Navigator>
  );
}
