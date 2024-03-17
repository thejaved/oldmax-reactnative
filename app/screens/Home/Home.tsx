import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// file import's
import {colors} from '../../config';
import HomeController from './HomeController';
import {icon1, icon2, icon3, icon4} from '../../assets/images';
import {AppInput, Categories, ScreenContainer} from '../../components';
import fonts from '../../config/fonts';

class Home extends HomeController {
  render() {
    return (
      <ScreenContainer containerStyle={styles.containerStyle}>
        <View style={styles.locationStyle}>
          <Entypo
            name="location-pin"
            color={colors.white}
            size={responsiveFontSize(3)}
          />
          <Text style={styles.textStyleLocation}>Delhi, Dilshard Garden</Text>
          <AntDesign
            name="down"
            color={colors.white}
            size={responsiveFontSize(2)}
            style={styles.arrowDownStyle}
          />
        </View>
        <AppInput
          IconName="search1"
          IconComponent={AntDesign}
          placeholderTextColor={colors.white}
          placeholder="Find cars, mobile, phones and more..."
        />
        <View style={styles.rowStyle}>
          <Text style={styles.headText}>Browse Categories</Text>
          <TouchableOpacity>
            <Text style={styles.textViewStyle}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.categorieStyle}>
          <Categories lableCataegries="Cars" Icon={icon1} />
          <Categories lableCataegries="Property" Icon={icon2} />
          <Categories lableCataegries="Laptops" Icon={icon3} />
          <Categories lableCataegries="Mobiles" Icon={icon4} />
        </View>
      </ScreenContainer>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    padding: responsiveWidth(3),
  },
  locationStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveWidth(4),
  },
  textStyleLocation: {
    color: colors.white,
    marginLeft: responsiveWidth(1),
    fontSize: responsiveFontSize(2),
    fontFamily: fonts.regular,
  },
  arrowDownStyle: {
    marginLeft: responsiveWidth(2),
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: responsiveWidth(5),
  },
  headText: {
    color: colors.white,
    fontSize: responsiveFontSize(2),
  },
  textViewStyle: {
    color: colors.primary,
  },
  categorieStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Home;
