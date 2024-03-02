import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// file import's
import ProfileController from './ProfileController';

class Profile extends ProfileController {
  render() {
    return (
      <View>
        <Text>Profile Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default Profile;
