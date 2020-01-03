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
  ScrollView,
} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

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

let dataBank = [
  {
    value: {
      account: 'Chuyển tiền nội bộ TTL Bank',
      amount: '',
    },
  },
  {
    value: {
      account: 'Chuyển tiền liên ngân hàng',
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

export default class ScreenChuyenTien extends React.Component {
  static navigationOptions = ({navigation}) => {
    console.log(navigation);
    return {
      // title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      title: 'CHUYỂN TIỀN',
      headerLeft: (
        <TouchableHighlight
          style={styles.iconContainer}
          onPress={navigation.getParam('goBack')}
          underlayColor="#2B3F51">
          <ImageBackground
            source={require('app/src/assets/icons/arrow_back.png')}
            style={[styles.icon, {marginLeft: 15}]}
          />
        </TouchableHighlight>
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({goBack: this._goBack});
  }

  _goBack = () => {
    this.toggleModal();
  };

  maxLength = 170;

  state = {
    isModalVisible: false,
    textLength: 0,
    soTien: '',
    showMoneyDescription: false,
    phamViChuyenTien: '',
    value: 0,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  onChangeText = text => {
    this.setState({textLength: text.length});
  };

  render() {
    var radio_props = [
      {label: 'Người chuyển', value: 0},
      {label: 'Người nhận', value: 1},
    ];

    /* 2. Get the param, provide a fallback value if not available */
    // eslint-disable-next-line no-unused-vars
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>
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
                  <Text style={styles.title}>Phạm vi chuyển tiền</Text>
                </View>
                <Dropdown
                  dropdownOffset={{top: 100}}
                  rippleCentered={true}
                  data={dataBank}
                  renderBase={renderBase}
                  itemTextStyle={styles.value}
                  itemPadding={15}
                  onChangeText={e =>
                    this.setState({phamViChuyenTien: e.account})
                  }
                />
              </View>
            </View>
            <View style={styles.line} />
          </View>

          <View style={styles.box}>
            <View style={styles.inputContainer}>
              <View style={styles.textContainer}>
                <View style={{}}>
                  <Text style={styles.title}>Tài khoản thụ hưởng</Text>
                </View>

                <TouchableHighlight
                  underlayColor="#fff"
                  onPress={() =>
                    this.props.navigation.push('ChonTaiKhoanThuHuong', {
                      itemId: Math.floor(Math.random() * 100),
                      phamViChuyenTien: this.state.phamViChuyenTien,
                    })
                  }>
                  <View style={{flexDirection: 'row'}}>
                    {this.props.navigation.state.params.doiTuongThuHuong ? (
                      <View style={styles.dropdownContainer}>
                        <View style={{}}>
                          <Text style={styles.value}>
                            {
                              this.props.navigation.state.params
                                .doiTuongThuHuong.name
                            }
                          </Text>
                        </View>
                        <View style={{paddingTop: -1}}>
                          <Text style={styles.description}>
                            {
                              this.props.navigation.state.params
                                .doiTuongThuHuong.stk
                            }
                          </Text>
                        </View>
                      </View>
                    ) : (
                      <View style={{flexDirection: 'column', width: 355}}>
                        <View style={{marginTop: 4, marginHorizontal: 20}}>
                          <Text style={styles.value} />
                        </View>
                        <View style={{marginVertical: 2, marginHorizontal: 20}}>
                          <Text style={styles.description} />
                        </View>
                      </View>
                    )}
                    <View style={{marginTop: 5}}>
                      <ImageBackground
                        source={require('app/src/assets/icons/dropdown.png')}
                        style={[styles.icon, styles.iconRotate]}
                      />
                    </View>
                  </View>
                </TouchableHighlight>

                <View style={styles.line} />
              </View>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inputContainer}>
              <View style={styles.textContainer}>
                <View style={{}}>
                  <Text style={styles.title}>Số tiền</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flexDirection: 'column', width: 330}}>
                    <View style={{marginHorizontal: 10}}>
                      <TextInput
                        style={{
                          fontSize: 16,
                          height: 20,
                          fontWeight: 'bold',
                          paddingVertical: -5,
                          paddingLeft: -2,
                        }}
                        keyboardType={'numeric'}
                        value={this.state.soTien
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        onChangeText={e => {
                          const value = e.replace(/,/g, '');
                          if (/^[0-9]*$/g.test(value)) {
                            this.setState({soTien: value});
                          }
                        }}
                        onSubmitEditing={e =>
                          this.setState({
                            showMoneyDescription: !this.state
                              .showMoneyDescription,
                          })
                        }
                      />
                    </View>
                    {this.state.showMoneyDescription ? (
                      <View style={{marginVertical: 4, marginHorizontal: 10}}>
                        <Text style={styles.description}>
                          Phí chuyển: 11,000 VND
                        </Text>
                        <Text style={styles.description}>
                          Tổng tiền:{' '}
                          {` ${(parseInt(this.state.soTien, 10) + 11000)
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND`}
                        </Text>
                      </View>
                    ) : (
                      <View style={{marginVertical: 4, marginHorizontal: 10}}>
                        <Text style={styles.description} />
                      </View>
                    )}
                  </View>
                  <View
                    style={{
                      marginHorizontal: 5,
                      width: 1,
                      height: 20,
                      backgroundColor: 'black',
                    }}
                  />
                  <View>
                    <Text styles={{fontSize: 16, color: 'black'}}>VND</Text>
                  </View>
                </View>

                <View style={styles.line} />
              </View>
            </View>
          </View>

          {this.state.showMoneyDescription ? (
            <View style={{height: 12}} />
          ) : null}

          <View style={styles.box}>
            <View style={styles.inputContainer}>
              <View style={styles.textContainer}>
                <View style={{}}>
                  <Text style={styles.title}>Đối tượng chịu phí</Text>
                </View>
                <View style={{alignItems: 'center', marginLeft: -70}}>
                  <RadioForm formHorizontal={true} animation={true}>
                    {/* To create radio buttons, loop through your array of options */}
                    {radio_props.map((obj, i) => (
                      <RadioButton labelHorizontal={true} key={i}>
                        {/*  You can set RadioButtonLabel before RadioButtonInput */}
                        <RadioButtonInput
                          obj={obj}
                          index={i}
                          isSelected={this.state.value === i}
                          onPress={value => {
                            this.setState({value: value});
                          }}
                          borderWidth={2}
                          buttonInnerColor={'black'}
                          buttonOuterColor={
                            this.state.value === i ? 'black' : '#000'
                          }
                          buttonSize={9}
                          buttonOuterSize={15}
                          buttonStyle={{marginBottom: 10}}
                          buttonWrapStyle={{
                            marginLeft: 60,
                            marginRight: 10,
                            marginTop: 12,
                            marginBottom: 8,
                          }}
                        />
                        <RadioButtonLabel
                          obj={obj}
                          index={i}
                          labelHorizontal={false}
                          onPress={value => {
                            this.setState({value: value});
                          }}
                          labelStyle={{
                            fontSize: 16,
                            color: 'black',
                            marginTop: -5,
                          }}
                        />
                      </RadioButton>
                    ))}
                  </RadioForm>
                </View>

                <View style={styles.line} />
              </View>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.inputContainer}>
              <View style={styles.textContainer}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.title}>Nội dung</Text>
                  <View
                    style={{
                      flexDirection: 'row-reverse',
                      flex: 1,
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 12, color: 'rgba(0, 0, 0, 0.54)'}}>
                      {this.state.textLength}/{this.maxLength}
                    </Text>
                  </View>
                </View>
                <View style={{marginHorizontal: 10}}>
                  <TextInput
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      paddingVertical: -5,
                      paddingLeft: -2,
                    }}
                    onChangeText={text => this.onChangeText(text)}
                    multiline
                    numberOfLines={3}
                    disableFullscreenUI={false}
                    autoCapitalize={'characters'}
                  />
                </View>
                <View style={styles.line} />
              </View>
            </View>
          </View>

          <View style={{flex: 1, justifyContent: 'flex-end', marginTop: 30}}>
            <TouchableHighlight
              style={{paddingTop: 15, alignItems: 'center'}}
              underlayColor="rgba(187, 191, 193, 0.2)"
              onPress={() =>
                this.props.navigation.push('XacNhanChuyenTien', {
                  itemId: Math.floor(Math.random() * 100),
                })
              }>
              <View style={styles.buttonThanhToan}>
                <Text
                  style={{fontSize: 20, color: '#fff', textAlign: 'center'}}>
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
                    XÁC NHẬN
                  </Text>
                </View>
                <View style={{margin: 20}}>
                  <Text style={{fontSize: 16, color: 'black'}}>
                    Bạn có chắc chắn muốn huỷ giao dịch này?
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 45,
                  }}>
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
                      this.props.navigation.navigate('Home', {
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
        </ScrollView>
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
  iconRotate: {
    transform: [{rotate: '270deg'}],
    marginLeft: -5,
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
