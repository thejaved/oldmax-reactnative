import React from 'react';
import {colors} from '../config';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import fonts from '../config/fonts';

interface TextInputAreaProps extends TextInputProps {
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const TextInputArea: React.FC<TextInputAreaProps> = ({
  placeholder,
  containerStyle,
  ...props
}) => {
  return (
    <View style={[styles.inputContianer, containerStyle]}>
      <TextInput
        multiline
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.black}
        {...props}
      />
    </View>
  );
};

export default TextInputArea;

const styles = StyleSheet.create({
  inputContianer: {
    width: '100%',
    backgroundColor: colors.bgSecond,
    minHeight: responsiveHeight(20),
    borderRadius: responsiveWidth(2),
  },
  input: {
    width: '100%',
    paddingHorizontal: responsiveWidth(2),
    color: colors.white,
    fontFamily: fonts.regular,
  },
});
