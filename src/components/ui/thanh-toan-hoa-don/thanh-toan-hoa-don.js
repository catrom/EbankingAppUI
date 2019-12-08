/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

export default class ScreenThanhToanHoaDon extends React.Component {
  static navigationOptions = ({navigationOptions}) => {
    console.log(navigationOptions);
    return {
      // title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      title: 'THANH TOÁN HOÁ ĐƠN',
    };
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    // eslint-disable-next-line no-unused-vars
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor="#fff"
          onPress={() =>
            this.props.navigation.push('NhapHoaDonDien', {
              itemId: Math.floor(Math.random() * 100),
            })
          }>
          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.loaihoadon}>HOÁ ĐƠN TIỀN ĐIỆN</Text>
            </View>
            <View style={{marginLeft: 35}}>
              <ImageBackground
                source={require('app/src/assets/icons/next.png')}
                style={styles.icon}
              />
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="#fff">
          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.loaihoadon}>HOÁ ĐƠN TIỀN NƯỚC</Text>
            </View>
            <View style={{marginLeft: 35}}>
              <ImageBackground
                source={require('app/src/assets/icons/next.png')}
                style={styles.icon}
              />
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="#fff"
          onPress={() =>
            this.props.navigation.push('NhapNapTienDienThoai', {
              itemId: Math.floor(Math.random() * 100),
            })
          }>
          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.loaihoadon}>NẠP TIỀN ĐIỆN THOẠI</Text>
            </View>
            <View style={{marginLeft: 35}}>
              <ImageBackground
                source={require('app/src/assets/icons/next.png')}
                style={styles.icon}
              />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 15,
    marginLeft: 13,
    marginRight: 13,
    marginTop: 15,
    height: 71,
    alignItems: 'center',
    backgroundColor: 'rgba(187, 191, 193, 0.1)',
  },
  textContainer: {
    width: 300,
  },
  loaihoadon: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    height: 26,
    width: 26,
    resizeMode: 'stretch',
    justifyContent: 'center',
  },
});
