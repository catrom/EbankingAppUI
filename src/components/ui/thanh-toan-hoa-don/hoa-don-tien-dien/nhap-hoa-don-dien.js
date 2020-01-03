/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableHighlight,
  Modal,
  Keyboard,
} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import CheckBox from '@react-native-community/checkbox';

let dataAccount = [
  {
    value: {
      account: 'TK-31410003194990',
      amount: 'Số dư khả dụng: 135,103 VND',
    },
  },
  {
    value: {
      account: 'TK-6592463598720',
      amount: 'Số dư khả dụng: 19,200,000 VND',
    },
  },
  {
    value: {
      account: 'TK-35692463598720',
      amount: 'Số dư khả dụng: 5,000,000 VND',
    },
  },
];

let dataSupplier = [
  {
    value: {
      account: 'EVN miền Bắc',
      amount: '',
    },
  },
  {
    value: {
      account: 'EVN miền Trung',
      amount: '',
    },
  },
  {
    value: {
      account: 'EVN miền Nam',
      amount: '',
    },
  },
  {
    value: {
      account: 'EVN Hồ Chí Minh',
      amount: '',
    },
  },
  {
    value: {
      account: 'EVN Hà Nội',
      amount: '',
    },
  },
];

const TextDisplay = props => {
  const {amount, account} = props;
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.dropdownContainer}>
        <View style={{}}>
          <Text style={styles.value}>{account}</Text>
        </View>
        <View style={{paddingTop: -1}}>
          <Text style={styles.description}>{amount}</Text>
        </View>
      </View>
      <View>
        <ImageBackground
          source={require('app/src/assets/icons/dropdown.png')}
          style={styles.icon}
        />
      </View>
    </View>
  );
};

const renderBase = props => {
  const {value} = props;
  let amount = '';
  let account = '';
  if (value && value.account) {
    if (value.amount) {
      amount = value.amount;
    }
    account = value.account;
  }

  return <TextDisplay amount={amount} account={account} />;
};

export default class ScreenNhapHoaDonDien extends React.Component {
  static navigationOptions = ({navigationOptions}) => {
    console.log(navigationOptions);
    return {
      // title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      title: 'HOÁ ĐƠN TIỀN ĐIỆN',
    };
  };

  state = {
    showSavedCustomer: true,
    showSaveCustomerOption: false,
    showBills: false,
    showCustomerChecker: false,
    customerIDInput: '',
    billPicker: false,
    isModalVisible: false,
    customerName: 'ĐẶNG MINH TIẾN',
    canPress: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  toggleSavedCustomer = () => {
    this.setState({
      showSavedCustomer: !this.state.showSavedCustomer,
      showCustomerChecker: true,
      showBills: !this.state.showBills,
      showSaveCustomerOption: !this.state.showSaveCustomerOption,
      customerName: 'ĐẶNG MINH TIẾN',
    });
    Keyboard.dismiss();
  };

  onChangeText(text) {
    this.setState({
      customerIDInput: text,
      canPress: text.length > 0,
    });

    if (text.length === 0) {
      this.setState({
        showSavedCustomer: true,
        showCustomerChecker: false,
        showSaveCustomerOption: false,
        showBills: false,
        billPicker: false,
      });
    }
  }

  setCustomerIDInput = (name, id) => {
    this.setState({
      customerIDInput: id,
      customerName: name,
      showCustomerChecker: !this.state.showCustomerChecker,
      showBills: !this.state.showBills,
      showSavedCustomer: !this.state.showSavedCustomer,
    });
  };

  setBillPicker = () => {
    this.setState({
      billPicker: !this.state.billPicker,
    });
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
                <Text style={styles.title}>Tài khoản</Text>
              </View>
              <Dropdown
                dropdownOffset={{top: 100}}
                rippleCentered={true}
                data={dataAccount}
                renderBase={renderBase}
                itemTextStyle={styles.value}
                subtitleStyle={styles.description}
                itemPadding={15}
              />
            </View>
          </View>
          <View style={styles.line} />
        </View>

        <View style={styles.box}>
          <View style={styles.inputContainer}>
            <View style={styles.textContainer}>
              <View style={{}}>
                <Text style={styles.title}>Chọn nhà cung cấp dịch vụ</Text>
              </View>
              <Dropdown
                dropdownOffset={{top: 100}}
                rippleCentered={true}
                data={dataSupplier}
                renderBase={renderBase}
                itemTextStyle={styles.value}
                itemPadding={15}
              />
            </View>
          </View>
          <View style={styles.line} />
        </View>

        <View style={styles.box}>
          <View style={styles.inputContainer}>
            <View style={styles.textContainer}>
              <View style={{}}>
                <Text style={styles.title}>Mã khách hàng</Text>
              </View>
              <View style={{paddingVertical: 5, paddingLeft: 12, width: 280}}>
                <View style={{}}>
                  <TextInput
                    style={{
                      fontSize: 16,
                      height: 20,
                      fontWeight: 'bold',
                      paddingVertical: -5,
                      paddingLeft: -2,
                    }}
                    value={this.state.customerIDInput}
                    onChangeText={text => this.onChangeText(text)}
                  />
                </View>

                {this.state.showCustomerChecker ? (
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.description}>
                      {this.state.customerName}
                    </Text>
                    <View style={{marginTop: -3, marginLeft: 5}}>
                      <ImageBackground
                        source={require('app/src/assets/icons/check_blue.png')}
                        style={{
                          height: 22,
                          width: 22,
                          resizeMode: 'stretch',
                          justifyContent: 'center',
                        }}
                      />
                    </View>
                  </View>
                ) : (
                  <View>
                    <Text style={styles.description} />
                    <View style={{marginTop: 1, marginLeft: 5}} />
                  </View>
                )}
              </View>
              <View style={styles.line} />
            </View>
            <View>
              <TouchableHighlight
                onPress={() => this.toggleSavedCustomer()}
                underlayColor="#fff"
                disabled={!this.state.canPress}>
                <View style={[styles.btn, styles.btnKiemtra]}>
                  <Text style={styles.textInButton}>Kiểm tra</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>

        {this.state.showSaveCustomerOption ? (
          <View style={{flexDirection: 'row'}}>
            <CheckBox
              disabled={false}
              tintColors={{true: 'rgba(43, 63, 81, 1)'}}
            />
            <Text style={{fontSize: 16, color: 'black', marginTop: 4}}>
              Lưu mã khách hàng
            </Text>
          </View>
        ) : null}

        {this.state.showSavedCustomer ? (
          <View style={{marginTop: 10}}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'rgba(0, 0, 0, 0.54)',
              }}>
              Khách hàng đã lưu
            </Text>

            <View style={{marginTop: 20}}>
              <TouchableHighlight
                underlayColor="rgba(187, 191, 193, 0.1)"
                onPress={() =>
                  this.setCustomerIDInput('NGUYỄN THÀNH LUÂN', 'KH09087662')
                }>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 12,
                      marginLeft: 10,
                      marginRight: 10,
                      backgroundColor: 'rgba(187, 191, 193, 0.1)',
                    }}>
                    <View style={{flex: 1}}>
                      <Text
                        style={{fontSize: 16, color: 'rgba(57, 57, 57, 1)'}}>
                        NGUYỄN THÀNH LUÂN
                      </Text>
                      <Text
                        style={{fontSize: 16, color: 'rgba(57, 57, 57, 1)'}}
                        numberOfLines={1}>
                        Mã khách hàng: KH09087662
                      </Text>
                    </View>
                  </View>
                  <View style={styles.separator} />
                </View>
              </TouchableHighlight>
            </View>
            <View style={{marginTop: 15}}>
              <TouchableHighlight
                underlayColor="rgba(187, 191, 193, 0.1)"
                onPress={() =>
                  this.setCustomerIDInput('NGUYỄN BÁ TÙNG', 'KH01508076')
                }>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 12,
                      marginLeft: 10,
                      marginRight: 10,
                      backgroundColor: 'rgba(187, 191, 193, 0.1)',
                    }}>
                    <View style={{flex: 1}}>
                      <Text
                        style={{fontSize: 16, color: 'rgba(57, 57, 57, 1)'}}>
                        NGUYỄN BÁ TÙNG
                      </Text>
                      <Text
                        style={{fontSize: 16, color: 'rgba(57, 57, 57, 1)'}}
                        numberOfLines={1}>
                        Mã khách hàng: KH01508076
                      </Text>
                    </View>
                  </View>
                  <View style={styles.separator} />
                </View>
              </TouchableHighlight>
            </View>
          </View>
        ) : null}

        {this.state.showBills ? (
          <View style={{marginTop: 20, width: 360}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 6,
                  backgroundColor: this.state.billPicker
                    ? 'rgba(43, 63, 81, 0.95)'
                    : '#fff',
                }}
              />
              <View>
                <TouchableHighlight
                  underlayColor="rgba(187, 191, 193, 0.1)"
                  onPress={() => this.setBillPicker()}>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 12,
                      backgroundColor: 'rgba(187, 191, 193, 0.1)',
                    }}>
                    <View style={{}}>
                      <Text
                        style={{fontSize: 16, color: 'rgba(57, 57, 57, 1)'}}>
                        HOA DON TIEN DIEN THANG 10/2019
                      </Text>
                      <Text
                        style={{fontSize: 16, color: 'rgba(57, 57, 57, 1)'}}>
                        DIA CHI: 123, NGUYEN VAN TU, P7, BEN TRE
                      </Text>
                      <Text
                        style={{fontSize: 16, color: 'rgba(57, 57, 57, 1)'}}>
                        Số tiền: 576,340 VND
                      </Text>
                    </View>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        ) : null}

        {this.state.billPicker ? (
          <View style={{marginTop: 15, marginLeft: 8}}>
            <Text style={{fontSize: 15, color: 'rgba(57, 57, 57, 1)'}}>
              Phí dịch vụ: 15,000 VND
            </Text>
            <Text style={{fontSize: 15, color: 'rgba(57, 57, 57, 1)'}}>
              Tổng tiền: 591,340 VND
            </Text>
          </View>
        ) : null}

        {this.state.billPicker ? (
          <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 30}}>
            <TouchableHighlight
              style={{paddingTop: 15, alignItems: 'center'}}
              underlayColor="rgba(187, 191, 193, 0.2)"
              onPress={() => this.toggleModal()}>
              <View style={styles.buttonThanhToan}>
                <Text
                  style={{fontSize: 20, color: '#fff', textAlign: 'center'}}>
                  Thanh toán
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        ) : null}

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
                  underlayColor="#fff">
                  <View style={[styles.btnModal, styles.btnHuyBo]}>
                    <Text style={styles.textInButtonModal}>Huỷ bỏ</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => {
                    this.toggleModal();
                    this.props.navigation.push('ChiTietGiaoDichHoaDon', {
                      itemId: Math.floor(Math.random() * 100),
                    });
                  }}
                  underlayColor="#fff">
                  <View style={[styles.btnModal, styles.btnDongY]}>
                    <Text style={styles.textInButtonModal}>Đồng ý</Text>
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
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  dropdownContainer: {
    paddingVertical: 3,
    paddingLeft: 12,
    width: 350,
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
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.87)',
  },
  description: {
    fontSize: 13,
    fontWeight: 'normal',
    color: 'rgba(0, 0, 0, 0.50)',
  },
  icon: {
    height: 26,
    width: 26,
    resizeMode: 'stretch',
    justifyContent: 'center',
  },
  btn: {
    padding: 10,
    marginTop: 30,
    marginLeft: 10,
    width: 90,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnKiemtra: {
    backgroundColor: 'rgba(43, 63, 81, 1)',
  },
  textInButton: {
    fontSize: 16,
    color: '#fff',
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
  btnModal: {
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
  textInButtonModal: {
    fontSize: 17,
    color: '#fff',
  },
});
