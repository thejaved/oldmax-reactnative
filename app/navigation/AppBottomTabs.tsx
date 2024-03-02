import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../config';
import {Home, Profile} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function AppBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          left: 10,
          right: 10,
          bottom: responsiveHeight(3),
          borderTopWidth: 0,
          backgroundColor: colors.bgSecond,
          borderRadius: responsiveWidth(100),
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Profile} />
    </Tab.Navigator>
  );
}

export default AppBottomTabs;
