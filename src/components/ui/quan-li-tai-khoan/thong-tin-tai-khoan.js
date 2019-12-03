/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

export default class ScreenThongTinTaiKhoan extends React.Component {
  static navigationOptions = ({navigationOptions}) => {
    return {
      title: 'THÔNG TIN TÀI KHOẢN',
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
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
          margin: 16,
        }}>
        <ListItem item1={'Tên chủ tài khoản'} item2={'NGUYEN VAN LUAN'} />
        <ListItem item1={'Số tài khoản'} item2={'31410003191890'} />
        <ListItem item1={'Số dư hiện tại'} item2={'8.935,103'} />
        <ListItem item1={'Số dư khả dụng'} item2={'8.935,103'} />
        <ListItem item1={'Loại tiền'} item2={'VND'} />
        <ListItem item1={'Chi nhánh'} item2={'CN Đông Sài Gòn'} />
      </View>
    );
  }
}

class ListItem extends React.PureComponent {
  render() {
    const item1 = this.props.item1;
    const item2 = this.props.item2;
    return (
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
        }}>
        <View style={styles.listThongTinTaiKhoan}>
          <Text style={{fontSize: 16}}>{item1}</Text>
          <Text style={{fontSize: 16}}>{item2}</Text>
        </View>
        <View style={{height: 1, backgroundColor: 'rgba(38, 50, 56, 1)'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listThongTinTaiKhoan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 13,
    marginBottom: 13,
    marginLeft: 4,
    marginRight: 4,
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
