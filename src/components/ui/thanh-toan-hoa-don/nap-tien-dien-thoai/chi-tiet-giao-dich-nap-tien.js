/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

export default class ScreenChiTietGiaoDichNapTien extends React.Component {
  static navigationOptions = ({navigationOptions}) => {
    console.log(navigationOptions);
    return {
      // title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      title: 'CHI TIẾT GIAO DỊCH',
    };
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    // eslint-disable-next-line no-unused-vars
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            marginVertical: 18,
          }}>
          <View style={{marginTop: -5, marginLeft: -40}}>
            <ImageBackground
              source={require('app/src/assets/icons/check_green.png')}
              style={{
                height: 30,
                width: 30,
                resizeMode: 'stretch',
                justifyContent: 'center',
              }}
            />
          </View>
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 16, color: 'rgba(0, 0, 0, 0.54)'}}>
              Giao dịch thành công
            </Text>
          </View>
        </View>

        <View>
          <Text style={{color: 'rgba(0, 0, 0, 0.65)', fontSize: 18}}>
            Chi tiết giao dịch: MGD-TTL20191109-0155037
          </Text>
        </View>

        <View style={styles.box}>
          <View style={styles.inputContainer}>
            <View style={styles.textContainer}>
              <View style={{}}>
                <Text style={styles.title}>Nội dung</Text>
              </View>
              <View style={{marginVertical: 12, marginHorizontal: 20}}>
                <Text style={styles.value}>
                  NAP TIEN DIEN THOAI - 038 674 4772
                </Text>
              </View>
              <View style={styles.line} />
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.inputContainer}>
            <View style={styles.textContainer}>
              <View style={{marginTop: -10}}>
                <Text style={styles.title}>Số tiền</Text>
              </View>
              <View style={{marginTop: 7, marginHorizontal: 20}}>
                <Text style={styles.value}>100,000 VND</Text>
              </View>
              <View style={{marginVertical: 4, marginHorizontal: 20}}>
                <Text style={styles.description}>Một trăm nghìn đồng</Text>
              </View>
              <View style={styles.line} />
            </View>
          </View>
        </View>

        <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 20}}>
          <TouchableHighlight
            style={{paddingTop: 15, alignItems: 'center'}}
            underlayColor="rgba(187, 191, 193, 0.2)"
            onPress={() => {
              this.props.navigation.navigate('Home', {
                itemId: Math.floor(Math.random() * 100),
              });
            }}>
            <View style={styles.buttonThanhToan}>
              <Text style={{fontSize: 20, color: '#fff', textAlign: 'center'}}>
                Màn hình chính
              </Text>
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
    padding: 15,
  },
  box: {
    flexDirection: 'column',
    height: 87,
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  line: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  textContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.54)',
  },
  value: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'black',
  },
  description: {
    fontSize: 11,
    fontWeight: 'normal',
    color: 'rgba(0, 0, 0, 0.60)',
  },
  buttonThanhToan: {
    margin: 7,
    width: 356,
    height: 51,
    backgroundColor: '#2B3F51',
    justifyContent: 'center',
  },
});
