/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

export default class ScreenChiTietKhuyenMai extends React.Component {
  static navigationOptions = ({navigationOptions}) => {
    return {
      title: 'TIN TỨC - KHUYẾN MÃI',
      headerRight: (
        <TouchableHighlight
          style={styles.iconContainer}
          onPress={() =>
            this.props.navigation.navigate('Home', {
              itemId: Math.floor(Math.random() * 100),
            })
          }>
          <ImageBackground
            source={require('app/src/assets/icons/home.png')}
            style={styles.icon}
          />
        </TouchableHighlight>
      ),
    };
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    // eslint-disable-next-line no-unused-vars
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('app/src/assets/images/promotion1.png')}
          style={styles.image}
        />
        <View style={{marginTop: 30, marginLeft: 20, marginRight: 20}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: 'rgba(24, 133, 234, 1)',
            }}>
            Ưu Đãi Khách Hàng Ưu Tiên Mới
          </Text>
          <Text style={{fontSize: 16, marginTop: 6}}>
            Đăng ngày: 10/11/2019
          </Text>
          <Text style={{fontSize: 18, marginTop: 12}}>
            Sở hữu ngay vali cao cấp khi trở thành Khách Hàng Ưu Tiên mới.
          </Text>
          <Text style={{fontSize: 18, marginTop: 12, fontWeight: 'bold'}}>
            Chương trình kéo dài từ nay đến 31/12/2019 (hoặc khi nào hết ngân
            sách)
          </Text>
          <Text style={{fontSize: 18, marginTop: 12}}>
            - Số dư tại thời điểm xét từ 2 đến 5 tỷ - tặng Vali 20"
          </Text>
          <Text style={{fontSize: 18}}>
            - Số dư tại thời điểm xét từ 5 tỷ trở lên - tặng Vali 50"
          </Text>
          <Text style={{fontSize: 18, marginTop: 12, fontWeight: 'bold'}}>
            Mọi chi tiết xin liên hệ Contact Center 24/7 18000069.
          </Text>
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
    marginTop: 15,
  },
  image: {
    resizeMode: 'stretch',
    justifyContent: 'center',
    height: 282,
  },
  iconContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  icon: {
    height: 26,
    width: 26,
    resizeMode: 'stretch',
    marginLeft: 5,
  },
});
