import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

// file import's
import {colors} from '../config';
import {responsiveWidth} from 'react-native-responsive-dimensions';

interface CategoriesProps extends TouchableOpacityProps {
  Icon: any;
  lableCataegries: string;
}

const Categories: React.FC<CategoriesProps> = ({
  Icon,
  lableCataegries,
  ...props
}) => {
  return (
    <View style={styles.mainStyle}>
      <TouchableOpacity style={styles.container} {...props}>
        <Image source={Icon} resizeMode="contain" style={{width: 35}} />
      </TouchableOpacity>
      <Text style={styles.lableCategorieStyle}>{lableCataegries}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    alignItems: 'center',
  },
  container: {
    width: responsiveWidth(18),
    height: responsiveWidth(18),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgSecond,
    borderRadius: responsiveWidth(9),
  },
  lableCategorieStyle: {
    color: colors.white,
    marginTop: responsiveWidth(2),
  },
});

export default Categories;
