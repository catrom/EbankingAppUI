/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ScreenThongTinTaiKhoan extends React.Component {
  static navigationOptions = ({navigationOptions}) => {
    console.log(navigationOptions);

    return {
      // title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      title: 'Thông Tin Tài Khoản',
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
        <View style={{height: 1, backgroundColor: '#263238'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listThongTinTaiKhoan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 13,
    marginLeft: 4,
    marginRight: 4,
  },
});
