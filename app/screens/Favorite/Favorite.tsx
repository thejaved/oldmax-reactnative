import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// file import's
import {ScreenContainer} from '../../components';
import FavoriteController from './FavoriteController';

class Favorite extends FavoriteController {
  render() {
    return <ScreenContainer></ScreenContainer>;
  }
}

const styles = StyleSheet.create({});

export default Favorite;
