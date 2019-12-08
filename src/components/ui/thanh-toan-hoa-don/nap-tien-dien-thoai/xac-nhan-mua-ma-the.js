/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Modal,
} from 'react-native';

export default class ScreenXacNhanMuaMaThe extends React.Component {
  static navigationOptions = ({navigationOptions}) => {
    console.log(navigationOptions);
    return {
      // title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      title: 'XÁC NHẬN',
    };
  };

  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    // eslint-disable-next-line no-unused-vars
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.inputContainer}>
            <View style={styles.textContainer}>
              <View style={{}}>
                <Text style={styles.title}>Tài khoản trích tiền</Text>
              </View>
              <View style={{marginTop: 7, marginHorizontal: 20}}>
                <Text style={styles.value}>TK-0400.10148.54755</Text>
              </View>
              <View style={{marginVertical: 4, marginHorizontal: 20}}>
                <Text style={styles.description}>
                  Số dư khả dụng: 4,314,122 VND
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
                <Text style={styles.title}>Nhà mạng</Text>
              </View>
              <View style={{marginTop: 7, marginHorizontal: 20}}>
                <Text style={styles.value}>Mobifone</Text>
              </View>
              <View style={{marginVertical: 4, marginHorizontal: 20}}>
                {/* //<Text style={styles.description}>Bạn Luân</Text> */}
              </View>
              <View style={styles.line} />
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.inputContainer}>
            <View style={styles.textContainer}>
              <View style={{}}>
                <Text style={styles.title}>Mệnh giá thẻ</Text>
              </View>
              <View style={{marginTop: 7, marginHorizontal: 20}}>
                <Text style={styles.value}>20,000 VND</Text>
              </View>
              <View style={{marginVertical: 4, marginHorizontal: 20}}>
                <Text style={styles.description}>Hai mươi nghìn đồng</Text>
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
              this.toggleModal();
            }}>
            <View style={styles.buttonThanhToan}>
              <Text style={{fontSize: 20, color: '#fff', textAlign: 'center'}}>
                Tiếp tục
              </Text>
            </View>
          </TouchableHighlight>
        </View>

        <Modal visible={this.state.isModalVisible} transparent={true}>
          <View style={styles.modal}>
            <View style={styles.viewInModal}>
              <View
                style={{
                  height: 50,
                  backgroundColor: '#2D3841',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 17, color: '#fff', marginLeft: 20}}>
                  XÁC NHẬN OTP
                </Text>
              </View>
              <View style={{margin: 20}}>
                <Text style={{fontSize: 12, color: 'rgba(0, 0, 0, 0.7)'}}>
                  Quý khách vui lòng nhập mã OTP được gửi về số điện thoại để
                  xác nhận khoá thẻ
                </Text>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: 'rgba(38, 50, 56, 0.4)',
                    width: 92,
                  }}>
                  <TextInput
                    style={{
                      fontSize: 16,
                      height: 40,
                      fontWeight: 'bold',
                    }}
                    keyboardType={'numeric'}
                    maxLength={6}
                  />
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableHighlight
                  onPress={() => this.toggleModal()}
                  underlayColor="rgba(102, 118, 133, 0.3)">
                  <View style={[styles.btn, styles.btnHuyBo]}>
                    <Text style={styles.textInButton}>Huỷ bỏ</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => {
                    this.toggleModal();
                    this.props.navigation.push('ChiTietGiaoDichMuaMaThe', {
                      itemId: Math.floor(Math.random() * 100),
                    });
                  }}
                  underlayColor="rgba(43, 63, 81, 0.3)">
                  <View style={[styles.btn, styles.btnDongY]}>
                    <Text style={styles.textInButton}>Đồng ý</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
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
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewInModal: {
    width: 374,
    height: 213,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(43, 63, 81, 0.3)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btn: {
    padding: 10,
    marginTop: 5,
    marginRight: 20,
    marginLeft: 20,
    width: 129,
    height: 37,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnHuyBo: {
    backgroundColor: 'rgba(102, 118, 133, 1)',
  },
  btnDongY: {
    backgroundColor: 'rgba(43, 63, 81, 1)',
  },
  textInButton: {
    fontSize: 17,
    color: '#fff',
  },
});
