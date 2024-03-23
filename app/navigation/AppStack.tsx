import {createStackNavigator} from '@react-navigation/stack';

//file import's
import {Create} from '../screens';
import AppBottomTabs from './AppBottomTabs';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Bottom Stack" component={AppBottomTabs} />
      <Stack.Screen name="Create" component={Create} />
    </Stack.Navigator>
  );
}

export default AppStack;
