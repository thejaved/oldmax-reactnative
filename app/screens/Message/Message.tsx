import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// file import's
import {ScreenContainer} from '../../components';
import MessageController from './MessageController';

class Message extends MessageController {
  render() {
    return <ScreenContainer></ScreenContainer>;
  }
}

const styles = StyleSheet.create({});

export default Message;
