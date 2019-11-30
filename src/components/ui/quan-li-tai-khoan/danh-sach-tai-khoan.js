import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export default class ScreenDanhSachTaiKhoan extends React.Component {
  static navigationOptions = ({navigationOptions}) => {
    console.log(navigationOptions);
    return {
      // title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      title: 'Tài Khoản',
    };
  };
  onRowPress = anId => {
    this.props.navigation.push('TaiKhoanThanhToan', {
      itemId: anId,
    });
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    // eslint-disable-next-line no-unused-vars
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.t2}> Tài khoản thanh toán </Text>

        <TouchableHighlight underlayColor="rgba(187, 191, 193, 0.2)">
          <View>
            <View style={styles.rowContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.stk}>31410003194990</Text>
                <Text style={styles.title} numberOfLines={1}>
                  so du kha dung: 135,103 VND
                </Text>
              </View>
            </View>
            <View style={styles.separator} />
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() =>
            this.props.navigation.push('TaiKhoanThanhToan', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
          underlayColor="rgba(187, 191, 193, 0.2)">
          <View>
            <View style={styles.rowContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.stk}>65692463598720</Text>
                <Text style={styles.title} numberOfLines={1}>
                  so du kha dung: 19,200,000 VND
                </Text>
              </View>
            </View>
            <View style={styles.separator} />
          </View>
        </TouchableHighlight>

        <Text style={styles.t2}> Tài khoản tiet kiem </Text>
        <TouchableHighlight underlayColor="rgba(187, 191, 193, 0.2)">
          <View>
            <View style={styles.rowContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.stk}>65692463598720</Text>
                <Text style={styles.title} numberOfLines={1}>
                  so du goc kha dung: 19,200,000 VND
                </Text>
                <Text style={styles.title} numberOfLines={1}>
                  Ngay dao han: 01/01/2020
                </Text>
              </View>
            </View>
            <View style={styles.separator} />
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
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'rgba(187, 191, 193, 0.1)',
  },
  textContainer: {
    flex: 1,
  },
  separator: {
    height: 5,
  },
  t2: {
    color: '#1885EA',
    fontSize: 16,
    margin: 5,
  },
  stk: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
