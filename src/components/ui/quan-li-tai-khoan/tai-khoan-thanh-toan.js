/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export default class ScreenTaiKhoanThanhToan extends React.Component {
  static navigationOptions = ({navigationOptions}) => {
    console.log(navigationOptions);
    return {
      title: 'Tài Khoản Thanh Toán',
    };
  };

  render() {
    // const itemId = navigation.getParam('itemId', 'NO-ID');
    // const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={styles.container}>
        <Text style={styles.tongSoDu}> Tổng số dư khả dụng </Text>

        <TouchableHighlight
          underlayColor="rgba(187, 191, 193, 0.2)"
          onPress={() =>
            this.props.navigation.push('ThongTinTaiKhoan', {
              itemId: Math.floor(Math.random() * 100),
            })
          }>
          <View>
            <View style={{flexDirection: 'row', margin: 20}}>
              <View style={{width: 60}} />
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                19,200,000 VND
              </Text>
            </View>
            <View style={styles.separator} />
          </View>
        </TouchableHighlight>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableHighlight underlayColor="rgba(187, 191, 193, 0.2)">
            <View style={styles.btnTaiKhoanThanhToan}>
              <Text style={{fontSize: 16, color: '#FFFFFF'}}>Chuyển tiền</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(187, 191, 193, 0.2)">
            <View style={styles.btnTaiKhoanThanhToan}>
              <Text style={{fontSize: 16, color: '#FFFFFF'}}>
                Nạp tiền điện thoại
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(187, 191, 193, 0.2)">
            <View style={styles.btnTaiKhoanThanhToan}>
              <Text style={{fontSize: 16, color: '#FFFFFF'}}>Thanh toán</Text>
            </View>
          </TouchableHighlight>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 50,
            marginBottom: 1,
            marginLeft: 30,
            marginRight: 30,
          }}>
          <Text style={{fontSize: 16}}>Tất cả</Text>
          <Text style={{fontSize: 16}}>Tiền vào</Text>
          <Text style={{fontSize: 16}}>Tiền ra</Text>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'flex-start',
            margin: 20,
          }}>
          <TransactionItem
            date={'05/11/19 12:36:27'}
            item1={'995219110555 - Rút tiền ATM'}
            item2={'-48,000'}
          />
          <TransactionItem
            date={'05/11/19 8:25:32'}
            item1={'995219110555 - Nạp tiền ví Momo'}
            item2={'-200,000'}
          />
          <TransactionItem
            date={'05/11/19 8:25:32'}
            item1={'995219110555 - Tiền lương tháng'}
            item2={'+5,480,000'}
          />
          <TransactionItem
            date={'05/11/19 8:25:32'}
            item1={'995219110555 - Học bổng học '}
            item2={'+14,000,000'}
          />
        </View>
      </View>
    );
  }
}

class TransactionItem extends React.PureComponent {
  render() {
    const date = this.props.date;
    const item1 = this.props.item1;
    const item2 = this.props.item2;
    return (
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
        }}>
        <View style={{marginTop: 5, marginLeft: 4, marginRight: 4}}>
          <Text style={{fontSize: 12}}>{date}</Text>
        </View>

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
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    margin: 20,
  },
  tongSoDu: {
    fontSize: 17,
  },
  separator: {
    height: 5,
  },
  btnTaiKhoanThanhToan: {
    padding: 10,
    margin: 7,
    width: 110,
    height: 60,
    backgroundColor: '#2B3F51',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listThongTinTaiKhoan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 13,
    marginLeft: 4,
    marginRight: 4,
  },
});
