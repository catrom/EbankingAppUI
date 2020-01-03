/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Modal,
  TouchableHighlight,
  TextInput,
} from 'react-native';

export default class ScreenChiTietThe extends React.Component {
  static navigationOptions = ({navigationOptions}) => {
    return {
      title: 'THÔNG TIN THẺ',
    };
  };

  state = {
    modalToggleCount: 0,
    isModalVisible: false,
    pageCount: 1,
    trangThai: 'Đang hoạt động',
  };

  toggleModal = result => {
    this.setState({modalToggleCount: this.state.modalToggleCount + 1});

    if (result === 'yes') {
      if (this.state.trangThai === 'Đang hoạt động') {
        this.setState({trangThai: 'Đã khoá'});
      } else {
        this.setState({trangThai: 'Đang hoạt động'});
      }
    }

    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
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
        <View style={styles.imageContainer}>
          <ImageBackground
            source={require('app/src/assets/images/card1.png')}
            style={styles.imgCard}
          />
        </View>

        <TouchableHighlight
          underlayColor="#fff"
          onPress={() => {
            this.toggleModal();
          }}
          style={{marginLeft: 150, marginRight: 150, paddingTop: 20}}>
          <View
            style={{
              flexDirection: 'column',
              height: 70,
              alignItems: 'center',
            }}>
            <ImageBackground
              source={require('app/src/assets/icons/lock.png')}
              style={{
                resizeMode: 'stretch',
                height: 36,
                width: 36,
              }}
            />
            <Text style={{fontSize: 16, color: 'rgba(0, 0, 0, 0.65)'}}>
              Khoá / Mở thẻ
            </Text>
          </View>
        </TouchableHighlight>

        <View style={{paddingLeft: 15, paddingTop: 30, flexDirection: 'row'}}>
          <View>
            <ImageBackground
              source={require('app/src/assets/icons/info2.png')}
              style={{
                resizeMode: 'stretch',
                height: 22,
                width: 22,
              }}
            />
          </View>
          <View>
            <Text style={{fontSize: 18, color: '#1885EA', marginLeft: 10}}>
              {this.state.trangThai}
            </Text>
          </View>
        </View>

        <View style={{paddingLeft: 15, paddingTop: 10, flexDirection: 'row'}}>
          <View>
            <ImageBackground
              source={require('app/src/assets/icons/time.png')}
              style={{
                resizeMode: 'stretch',
                height: 22,
                width: 22,
              }}
            />
          </View>
          <View>
            <Text style={{fontSize: 18, color: '#1885EA', marginLeft: 10}}>
              Giao dịch 30 ngày gần nhất
            </Text>
          </View>
        </View>

        <View
          style={{
            paddingTop: 10,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
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

        <View style={styles.listTransactionItems}>
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
            item1={'995219110555 - Học bổng học kỳ...'}
            item2={'+14,000,000'}
          />
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
                  onPress={() => this.toggleModal('no')}
                  underlayColor="rgba(102, 118, 133, 0.3)">
                  <View style={[styles.btn, styles.btnHuyBo]}>
                    <Text style={styles.textInButton}>Huỷ bỏ</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => this.toggleModal('yes')}
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

class TransactionItem extends React.PureComponent {
  render() {
    const date = this.props.date;
    const item1 = this.props.item1;
    const item2 = this.props.item2;
    const item2color =
      item2[0] === '+' ? 'rgba(24, 133, 234, 0.87)' : 'rgba(250, 12, 12, 0.87)';

    return (
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
        }}>
        <View style={{marginTop: 4, marginLeft: 4, marginRight: 4}}>
          <Text style={{fontSize: 13, color: 'rgba(125, 129, 125, 0.87)'}}>
            {date}
          </Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    marginTop: 15,
  },
  imageContainer: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    height: 210,
    marginTop: 5,
    marginLeft: 40,
    marginRight: 40,
  },
  imgCard: {
    resizeMode: 'stretch',
    height: 210,
  },
  iconMovePage: {
    height: 26,
    width: 26,
    resizeMode: 'stretch',
    marginLeft: 5,
    marginRight: 5,
    marginTop: -2,
  },
  listTransactionItems: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    margin: 20,
    marginTop: 15,
  },
  listThongTinTaiKhoan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 4,
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
