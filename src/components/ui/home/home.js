/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

export default class ScreenHome extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: () => null,
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <View style={styles.notifyIconContainer}>
            <TouchableHighlight underlayColor="#fff">
              <ImageBackground
                source={require('app/src/assets/icons/logout.png')}
                style={styles.iconOnBanner}
              />
            </TouchableHighlight>
            <TouchableHighlight underlayColor="#fff">
              <ImageBackground
                source={require('app/src/assets/icons/notify.png')}
                style={styles.iconOnBanner}
              />
            </TouchableHighlight>
          </View>
          <View style={styles.circleContainer}>
            <View style={styles.circle} />
          </View>
          <View style={styles.editIconContainer}>
            <TouchableHighlight underlayColor="#fff">
              <ImageBackground
                source={require('app/src/assets/icons/edit.png')}
                style={styles.iconOnBanner}
              />
            </TouchableHighlight>
          </View>
          <View style={{alignItems: 'center', paddingTop: 17}}>
            <Text style={{fontSize: 25, color: '#fff'}}>Xin chào, LUAN</Text>
          </View>
        </View>

        <View style={styles.buttonArea}>
          <View style={styles.buttonRowContainer}>
            <View style={styles.buttonColumnContainer}>
              <TouchableHighlight
                underlayColor="#fff"
                onPress={() => {
                  this.props.navigation.navigate('DanhSachTaiKhoan', {
                    itemId: 10,
                    otherParam: 'anything you want here',
                  });
                }}>
                <View style={[styles.buttonThongTinTaiKhoan, styles.shadow]}>
                  <View>
                    <ImageBackground
                      source={require('app/src/assets/icons/btn_account.png')}
                      style={{width: 38, height: 38, resizeMode: 'stretch'}}
                    />
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.textInButton,
                        {paddingTop: 15, paddingHorizontal: 35},
                      ]}>
                      QUẢN LÝ TÀI KHOẢN
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor="#fff"
                onPress={() => {
                  this.props.navigation.navigate('ThanhToanHoaDon', {
                    itemId: 20,
                    otherParam: 'anything you want here',
                  });
                }}>
                <View style={[styles.buttonThanhToan, styles.shadow]}>
                  <View>
                    <ImageBackground
                      source={require('app/src/assets/icons/btn_payment.png')}
                      style={{width: 38, height: 26, resizeMode: 'stretch'}}
                    />
                  </View>
                  <View>
                    <Text style={[styles.textInButton, {paddingTop: 15}]}>
                      THANH TOÁN
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.buttonColumnContainer}>
              <TouchableHighlight
                underlayColor="#fff"
                onPress={() => {
                  this.props.navigation.navigate('ChuyenTien', {
                    itemId: 20,
                    otherParam: 'anything you want here',
                  });
                }}>
                <View style={[styles.buttonChuyenTien, styles.shadow]}>
                  <View>
                    <ImageBackground
                      source={require('app/src/assets/icons/btn_transfer.png')}
                      style={{width: 38, height: 38, resizeMode: 'stretch'}}
                    />
                  </View>
                  <View>
                    <Text style={[styles.textInButton, {paddingTop: 5}]}>
                      CHUYỂN TIỀN
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor="#fff"
                onPress={() => {
                  this.props.navigation.navigate('DanhSachThe', {
                    itemId: 20,
                    otherParam: 'anything you want here',
                  });
                }}>
                <View style={[styles.buttonDanhSachThe, styles.shadow]}>
                  <View>
                    <ImageBackground
                      source={require('app/src/assets/icons/btn_card.png')}
                      style={{width: 39, height: 38, resizeMode: 'stretch'}}
                    />
                  </View>
                  <View>
                    <Text
                      style={[
                        styles.textInButton,
                        {paddingTop: 15, paddingHorizontal: 5},
                      ]}>
                      DANH SÁCH THẺ
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <TouchableHighlight
            underlayColor="#fff"
            onPress={() => {
              this.props.navigation.navigate('DanhSachKhuyenMai', {
                itemId: 20,
                otherParam: 'anything you want here',
              });
            }}>
            <View style={[styles.buttonTinTuc, styles.shadow]}>
              <View>
                <ImageBackground
                  source={require('app/src/assets/icons/btn_notice.png')}
                  style={{width: 33, height: 33, resizeMode: 'stretch'}}
                />
              </View>
              <View>
                <Text
                  style={[
                    styles.textInButton,
                    {paddingTop: 15, paddingHorizontal: 5},
                  ]}>
                  TIN TỨC - KHUYẾN MÃI
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
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
  banner: {
    height: 253,
    backgroundColor: 'rgba(43, 63, 81, 1)',
    flexDirection: 'column',
  },
  notifyIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  iconOnBanner: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
  },
  iconOnButton: {
    width: 38,
    height: 38,
    resizeMode: 'stretch',
  },
  circleContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: -30,
  },
  circle: {
    width: 156,
    height: 156,
    borderRadius: 156 / 2,
    backgroundColor: '#fff',
  },
  editIconContainer: {
    justifyContent: 'flex-start',
    marginLeft: 290,
    marginTop: -30,
  },
  buttonArea: {
    margin: 30,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonColumnContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonThongTinTaiKhoan: {
    width: 166,
    height: 200,
    backgroundColor: 'rgba(14, 48, 80, 0.8)',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonChuyenTien: {
    width: 144,
    height: 121,
    backgroundColor: 'rgba(43, 63, 81, 0.9)',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonThanhToan: {
    width: 166,
    height: 109,
    backgroundColor: 'rgba(43, 63, 81, 1)',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonDanhSachThe: {
    width: 144,
    height: 188,
    backgroundColor: 'rgba(5, 43, 78, 1)',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTinTuc: {
    width: 330,
    height: 94,
    backgroundColor: 'rgba(1, 8, 15, 0.7)',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5,
  },
  textInButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});
