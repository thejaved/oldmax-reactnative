import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

// file import's
import HomeController from './HomeController';
import {ScreenContainer} from '../../components';

class Home extends HomeController {
  render() {
    return (
      <ScreenContainer>
        <TouchableOpacity
          onPress={() => this.props.navigation?.navigate('Profile')}>
          <Text>Open Profile</Text>
        </TouchableOpacity>
      </ScreenContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default Home;
