import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

export default class ScreenHome extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.home}>
        <View style={{margin: 10}}>
          <Button
            title="QUẢN LÝ TÀI KHOẢN"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('DanhSachTaiKhoan', {
                itemId: 80,
                otherParam: 'anything you want here',
              });
            }}
          />
        </View>
        <View style={{margin: 10}}>
          <Button
            title="QUẢN LÝ THẺ"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('DanhSachThe', {
                itemId: 70,
                otherParam: 'anything you want here',
              });
            }}
          />
        </View>
        <View style={{margin: 10}}>
          <Button
            title="THANH TOÁN HOÁ ĐƠN"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('ThanhToanHoaDon', {
                itemId: 50,
                otherParam: 'anything you want here',
              });
            }}
          />
        </View>
        <View style={{margin: 10}}>
          <Button
            title="TIN TỨC - KHUYẾN MÃI"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('DanhSachKhuyenMai', {
                itemId: 60,
                otherParam: 'anything you want here',
              });
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
});
