import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
