import React from 'react';
import {Image, Modal, StyleSheet, Text, View} from 'react-native';

// file import's
import CreateController from './CreateController';
import {AppButton, ScreenContainer} from '../../components';
import TextInputArea from '../../components/TextInputArea';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {colors} from '../../config';
import fonts from '../../config/fonts';

class Create extends CreateController {
  render() {
    return (
      <>
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
            <AppButton
              title="Create magic!"
              loading={this.state.isLoading}
              containerStyle={styles.button}
              onPress={this.handleGenerateImage}
            />
          </View>
        </ScreenContainer>
        <Modal visible={this.state.isOpen} animationType="slide" transparent>
          <View style={styles.modalContainer}>
            {this.state.imageUrl !== '' && (
              <Image
                source={{uri: this.state.imageUrl}}
                style={styles.imageStyle}
              />
            )}
          </View>
        </Modal>
      </>
    );
  }
}

const styles = StyleSheet.create({
  labelDesign: {
    color: colors.white,
    fontFamily: fonts.regular,
    paddingVertical: responsiveWidth(4),
  },
  areaView: {
    flex: 1,
    paddingHorizontal: responsiveWidth(4),
  },
  button: {
    marginTop: responsiveWidth(4),
  },
  modalContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  imageStyle: {
    width: '100%',
    height: responsiveHeight(40),
  },
});

export default Create;
