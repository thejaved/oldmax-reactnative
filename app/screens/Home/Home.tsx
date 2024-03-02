import React from 'react';
import {StyleSheet} from 'react-native';

// file import's
import HomeController from './HomeController';
import {ScreenContainer} from '../../components';

class Home extends HomeController {
  render() {
    return <ScreenContainer></ScreenContainer>;
  }
}

const styles = StyleSheet.create({});

export default Home;
