import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../config';
import {Favorite, Home, Message, Profile} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity, View} from 'react-native';

const Tab = createBottomTabNavigator();

function AppBottomTabs(props: any) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          height: responsiveHeight(10),
          borderTopWidth: 0,
          backgroundColor: colors.bgSecond,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="message1" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={Home}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                position: 'absolute',
                padding: responsiveWidth(2),
                backgroundColor: colors.bgColor,
                bottom: responsiveHeight(1.5),
                borderRadius: responsiveWidth(15),
              }}>
              <TouchableOpacity
                style={{
                  padding: responsiveWidth(5),
                  borderRadius: responsiveWidth(15),
                  backgroundColor: colors.primary,
                }}
                onPress={() => props.navigation.navigate('Create')}>
                <AntDesign
                  name="plus"
                  size={responsiveFontSize(3)}
                  color={colors.white}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppBottomTabs;
