/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, TouchableOpacity, ImageBackground } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';

export default class ScreenTaiKhoanThanhToan extends React.Component {
  static navigationOptions = ({navigationOptions}) => {
    console.log(navigationOptions);
    return {
      title: 'TÀI KHOẢN THANH TOÁN',
    };
  };

  state = {
    index: 0,
    routes: [
      {key: 'All', title: 'Tất cả'},
      {key: 'MoneyIn', title: 'Tiền vào'},
      {key: 'MoneyOut', title: 'Tiền ra'},
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.Text style={{ color: 'black', fontSize: 16, paddingTop: 50 }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    All: AllView,
    MoneyIn: MoneyInView,
    MoneyOut: MoneyOutView,
  });

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
              <View style={{width: 70}} />
              <Text style={{fontSize: 30, fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.75)'}}> 19,200,000 </Text>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.75)', marginTop: 10}}> VND </Text>
              <View style={{width: 30}} />
              <ImageBackground source={require('app/src/assets/icons/next.png')} style={styles.icon} />
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
              <Text style={styles.textInButton}>Chuyển tiền</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(187, 191, 193, 0.2)">
            <View style={styles.btnTaiKhoanThanhToan}>
              <Text style={styles.textInButton}>
                Nạp tiền điện thoại
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="rgba(187, 191, 193, 0.2)">
            <View style={styles.btnTaiKhoanThanhToan}>
              <Text style={styles.textInButton}>Thanh toán</Text>
            </View>
          </TouchableHighlight>
        </View>

        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
        />
      </View>
    );
  }
}

class TransactionItem extends React.PureComponent {
  render() {
    const date = this.props.date;
    const item1 = this.props.item1;
    const item2 = this.props.item2;
    const item2color = item2[0] === '+' ? 'rgba(24, 133, 234, 0.87)' : 'rgba(250, 12, 12, 0.87)';

    return (
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
        }}>
        <View style={{marginTop: 4, marginLeft: 4, marginRight: 4}}>
          <Text style={{fontSize: 13, color: 'rgba(125, 129, 125, 0.87)'}}>{date}</Text>
        </View>

        <View style={styles.listThongTinTaiKhoan}>
          <Text style={{fontSize: 16, color: 'black'}}>{item1}</Text>
          <Text style={{fontSize: 16, color: item2color}}>{item2}</Text>
        </View>
        <View style={{height: 1, backgroundColor: 'rgba(38, 50, 56, 0.7)'}} />
      </View>
    );
  }
}

const AllView = () => (
  <View
    style={styles.listTransactionItems}>
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
      item1={'995219110555 - Tiền lương tháng...'}
      item2={'+5,480,000'}
    />
    <TransactionItem
      date={'05/11/19 8:25:32'}
      item1={'995219110555 - Học bổng học kỳ... '}
      item2={'+14,000,000'}
    />
  </View>
);

const MoneyInView = () => (
  <View
    style={styles.listTransactionItems}>
    <TransactionItem
      date={'05/11/19 8:25:32'}
      item1={'995219110555 - Tiền lương tháng...'}
      item2={'+5,480,000'}
    />
    <TransactionItem
      date={'05/11/19 8:25:32'}
      item1={'995219110555 - Học bổng học kỳ...'}
      item2={'+14,000,000'}
    />
  </View>
);

const MoneyOutView = () => (
  <View
    style={styles.listTransactionItems}>
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
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
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
    width: 116,
    height: 45,
    backgroundColor: '#2B3F51',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInButton: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  listThongTinTaiKhoan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 4,
  },
  listTransactionItems: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    margin: 5,
  },
  icon: {
    padding: 10,
    marginTop: 9,
    height: 26,
    width: 26,
    resizeMode: 'stretch',
  },
});
