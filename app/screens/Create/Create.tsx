import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// file import's
import CreateController from './CreateController';
import {AppButton, ScreenContainer} from '../../components';
import TextInputArea from '../../components/TextInputArea';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {colors} from '../../config';

class Create extends CreateController {
  render() {
    return (
      <ScreenContainer>
        <View style={styles.areaView}>
          <Text style={styles.labelDesign}>
            Describe in as much detail as possible what you want to see as a
            result:
          </Text>
          <TextInputArea
            placeholderTextColor={colors.white}
            placeholder="Describe the image you want to generate."
          />
          <AppButton title="Create magic!" containerStyle={styles.button} />
        </View>
      </ScreenContainer>
    );
  }
}

const styles = StyleSheet.create({
  labelDesign: {
    color: colors.white,
    paddingVertical: responsiveWidth(4),
  },
  areaView: {
    flex: 1,
    paddingHorizontal: responsiveWidth(4),
  },
  button: {
    marginTop: responsiveWidth(4),
  },
});

export default Create;
