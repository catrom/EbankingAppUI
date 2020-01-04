/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

export default class ScreenDanhSachKhuyenMai extends React.Component {
  static navigationOptions = ({navigationOptions}) => {
    console.log(navigationOptions);
    return {
      // title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      title: 'TIN TỨC - KHUYẾN MÃI',
    };
  };

  state = {
    pageCount: 1,
  };

  prePageCount = () => {
    let x = this.state.pageCount - 1;
    this.setState({pageCount: x < 1 ? 1 : x});
  };

  nextPageCount = () => {
    let x = this.state.pageCount + 1;
    this.setState({pageCount: x > 1 ? 1 : x});
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    // eslint-disable-next-line no-unused-vars
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.push('ChiTietKhuyenMai', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
          underlayColor="rgba(218, 218, 218, 1)">
          <View style={styles.itemContainer}>
            <View style={{marginTop: 15, marginLeft: 15, marginRight: 5}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.title}>Ưu Đãi Khách Hàng Ưu Tiên Mới</Text>
                <ImageBackground
                  source={require('app/src/assets/icons/next.png')}
                  style={styles.icon}
                />
              </View>
              <Text style={styles.date}>Đăng ngày: 10/11/2019</Text>
            </View>

            <View style={{marginTop: 10}}>
              <ImageBackground
                source={require('app/src/assets/images/promotion3.png')}
                style={styles.image}
              />
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() =>
            this.props.navigation.push('ChiTietKhuyenMai', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
          underlayColor="rgba(218, 218, 218, 1)">
          <View style={styles.itemContainer}>
            <View style={{marginTop: 15, marginLeft: 15, marginRight: 5}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.title}>
                  Thông Báo Thay Đổi Hạn Mức Tiền Gửi
                </Text>
                <ImageBackground
                  source={require('app/src/assets/icons/next.png')}
                  style={styles.icon}
                />
              </View>
              <Text style={styles.date}>Đăng ngày: 08/11/2019</Text>
            </View>

            <View style={{marginTop: 10}}>
              <ImageBackground
                source={require('app/src/assets/images/promotion1.png')}
                style={styles.image}
              />
            </View>
          </View>
        </TouchableHighlight>

        {/* <TouchableHighlight underlayColor="rgba(218, 218, 218, 1)">
          <View style={styles.itemContainer}>
            <View style={{marginTop: 15, marginLeft: 5, marginRight: 5}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.title}>
                  Thông Báo Thay Đổi Ngày Trả Lãi Tài Khoản...
                </Text>
                <ImageBackground
                  source={require('app/src/assets/icons/next.png')}
                  style={styles.icon}
                />
              </View>
              <Text style={styles.date}>Đăng ngày: 07/11/2019</Text>
            </View>

            <View style={{marginTop: 10}}>
              <ImageBackground
                source={require('app/src/assets/images/promotion3.png')}
                style={styles.image}
              />
            </View>
          </View>
        </TouchableHighlight> */}

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: 20,
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
              underlayColor="#fff"
              onPress={() => this.prePageCount()}>
              <ImageBackground
                source={require('app/src/assets/icons/back.png')}
                style={styles.iconMovePage}
              />
            </TouchableHighlight>
            <Text style={{color: 'rgba(0, 0, 0, 0.5)', fontSize: 16}}>
              Trang {this.state.pageCount}/1
            </Text>
            <TouchableHighlight
              underlayColor="#fff"
              onPress={() => this.nextPageCount()}>
              <ImageBackground
                source={require('app/src/assets/icons/next.png')}
                style={styles.iconMovePage}
              />
            </TouchableHighlight>
          </View>
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
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#F1F1F1',
    height: 180,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.87)',
    fontWeight: 'bold',
  },
  date: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.87)',
    fontWeight: 'normal',
  },
  image: {
    resizeMode: 'stretch',
    justifyContent: 'center',
    height: 100,
    marginHorizontal: 20,
  },
  buttonNext: {
    margin: 7,
    width: 356,
    height: 51,
    backgroundColor: '#2B3F51',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInButton: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  icon: {
    height: 26,
    width: 26,
    resizeMode: 'stretch',
  },
  iconMovePage: {
    height: 26,
    width: 26,
    resizeMode: 'stretch',
  },
});
