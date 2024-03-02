import React from 'react';
import {StyleSheet, Text} from 'react-native';

// file import's
import ProfileController from './ProfileController';
import {ScreenContainer} from '../../components';

class Profile extends ProfileController {
  render() {
    return <ScreenContainer></ScreenContainer>;
  }
}

const styles = StyleSheet.create({});

export default Profile;
