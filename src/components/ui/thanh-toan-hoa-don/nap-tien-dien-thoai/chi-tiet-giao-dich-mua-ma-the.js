/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  Alert,
} from 'react-native';
import {showMessage, hideMessage} from 'react-native-flash-message';

export default class ScreenChiTietGiaoDichMuaMaThe extends React.Component {
  static navigationOptions = ({navigationOptions}) => {
    console.log(navigationOptions);
    return {
      // title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      title: 'CHI TIẾT GIAO DỊCH',
      headerLeft: null,
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
                  MUA MA THE DI DONG - MOBIFONE - 20000VND
                </Text>
              </View>
              <View style={styles.line} />
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.inputContainer}>
            <View style={styles.textContainer}>
              <View style={{}}>
                <Text style={styles.title}>Thông tin thẻ</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column', width: 355}}>
                  <View style={{marginTop: 7, marginHorizontal: 20}}>
                    <Text style={[styles.value, styles.bold]}>
                      214964497573664
                    </Text>
                  </View>
                  <View style={{marginVertical: 4, marginHorizontal: 20}}>
                    <Text style={styles.description}>
                      Số seri: 10004816718943
                    </Text>
                  </View>
                </View>
                <TouchableHighlight
                  underlayColor="#fff"
                  onPress={() => {
                    // showMessage({
                    //   message: 'Sao chép thông tin thẻ thành công!',
                    //   type: 'info',
                    // });
                    Alert.alert(
                      'Đã sao chép thông tin thẻ vào khay nhớ tạm',
                      'Số thẻ: 214964497573664',
                    );
                  }}>
                  <View style={{marginTop: 5}}>
                    <ImageBackground
                      source={require('app/src/assets/icons/copy.png')}
                      style={styles.icon}
                    />
                  </View>
                </TouchableHighlight>
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
    fontSize: 13,
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
  bold: {
    fontWeight: 'bold',
  },
  icon: {
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    justifyContent: 'center',
  },
});
