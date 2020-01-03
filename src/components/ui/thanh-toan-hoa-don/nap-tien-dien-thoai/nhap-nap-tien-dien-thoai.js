/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import {Dropdown} from 'react-native-material-dropdown';

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

let dataPeople = [
  {
    value: {
      account: 'SDT-012 345 6789 (từ Nạp gần đây)',
      amount: 'Người yêu',
    },
  },
  {
    value: {
      account: 'SDT-038 543 7890 (từ Nạp gần đây)',
      amount: 'BA',
    },
  },
  {
    value: {
      account: 'SDT-012 345 9876 (từ Nạp gần đây)',
      amount: 'MẸ',
    },
  },
  {
    value: {
      account: 'SDT-012 345 6789',
      amount: 'Bạn Luân (PMCL2)',
    },
  },
  {
    value: {
      account: 'SDT-090 540 3101',
      amount: 'Minh Tiến (PMCL2)',
    },
  },
  {
    value: {
      account: 'SDT-038 674 4772',
      amount: 'Chăm sóc khách hàng',
    },
  },
  {
    value: {
      account: 'SDT-098 765 4321',
      amount: 'No Name',
    },
  },
];

let dataNetwork = [
  {value: {account: 'Mobifone', amount: ''}},
  {value: {account: 'Vinaphone', amount: ''}},
  {value: {account: 'Viettel', amount: ''}},
  {value: {account: 'Vietnamobile', amount: ''}},
  {value: {account: 'Gmobile', amount: ''}},
];

let selectedCardIndex = 2;

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

export default class ScreenNhapNapTienDienThoai extends React.Component {
  static navigationOptions = ({navigation}) => {
    //console.log(navigation);
    return {
      // title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      title: 'NẠP TIỀN ĐIỆN THOẠI',
    };
  };

  state = {
    soTien: '',
    showMoneyDescription: false,
    index: 0,
    routes: [
      {
        key: 'NapTienDienThoai',
        title: 'Nạp tiền điện thoại',
        navigation: this.props.navigation,
      },
      {key: 'MuaMaThe', title: 'Mua mã thẻ', navigation: this.props.navigation},
    ],
  };

  _handleIndexChange = index => {
    this.setState({index});
    console.log(this.state.index);
  };

  handleTextChange = text => {
    const value = text.replace(/,/g, '');
    if (/^[0-9]*$/g.test(value)) {
      this.setState({soTien: value});
    }
  };

  _renderTabBar = props => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({index: i})}>
              {route.key ===
              props.navigationState.routes[this.state.index].key ? (
                <Animated.Text
                  style={{color: 'black', fontSize: 16, fontWeight: '700'}}>
                  {route.title}
                </Animated.Text>
              ) : (
                <Animated.Text style={{color: 'black', fontSize: 16}}>
                  {route.title}
                </Animated.Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  componentDidMount() {
    this.props.navigation.setParams({confirmView: this._goConfirmView});
  }

  _goConfirmView = () => {
    this.props.navigation.push('XacNhanNapTienDienThoai', {
      itemId: Math.floor(Math.random() * 100),
    });
  };

  NapTienDienThoaiView = () => {
    return (
      <View style={{paddingTop: 30, paddingHorizontal: 15}}>
        <View style={styles.box}>
          <View style={styles.inputContainer}>
            <View style={styles.textContainer}>
              <View style={{}}>
                <Text style={styles.title}>Tài khoản trích tiền</Text>
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
                <Text style={styles.title}>Nạp đến</Text>
              </View>
              <Dropdown
                dropdownOffset={{top: 100}}
                rippleCentered={true}
                data={dataPeople}
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
                        this.handleTextChange(e);
                      }}
                      onSubmitEditing={() =>
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
                        Năm trăm bảy mươi sáu nghìn đồng
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
      </View>
    );
  };

  MuaMaTheView = () => {
    return (
      <View style={{paddingTop: 30, paddingHorizontal: 15}}>
        <View style={styles.box}>
          <View style={styles.inputContainer}>
            <View style={styles.textContainer}>
              <View style={{}}>
                <Text style={styles.title}>Tài khoản trích tiền</Text>
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
                <Text style={styles.title}>Nhà mạng</Text>
              </View>
              <Dropdown
                dropdownOffset={{top: 100}}
                rippleCentered={true}
                data={dataNetwork}
                renderBase={renderBase}
                itemTextStyle={styles.value}
                subtitleStyle={styles.description}
                itemPadding={15}
              />
            </View>
          </View>
          <View style={styles.line} />
        </View>

        <View style={{marginTop: 10}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'rgba(0, 0, 0, 0.54)',
            }}>
            Mệnh giá thẻ
          </Text>
        </View>

        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <Card index={1} value={'10,000 VND'} />
            <Card index={2} value={'20,000 VND'} />
            <Card index={3} value={'30,000 VND'} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Card index={4} value={'50,000 VND'} />
            <Card index={5} value={'100,000 VND'} />
            <Card index={6} value={'200,000 VND'} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Card index={7} value={'300,000 VND'} />
            <Card index={8} value={'500,000 VND'} />
          </View>
        </View>

        <View style={{flex: 1, justifyContent: 'flex-end', marginTop: 65}}>
          <TouchableHighlight
            style={{paddingTop: 15, alignItems: 'center'}}
            underlayColor="rgba(187, 191, 193, 0.2)"
            //onPress={() => this.toggleModal()}
          >
            <View style={styles.buttonTieptuc}>
              <Text style={{fontSize: 20, color: '#fff', textAlign: 'center'}}>
                Tiếp tục
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  };

  _renderScene = SceneMap({
    NapTienDienThoai: this.NapTienDienThoaiView,
    MuaMaThe: this.MuaMaTheView,
  });

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    // eslint-disable-next-line no-unused-vars
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <View style={{height: 510}}>
          <TabView
            navigationState={this.state}
            renderScene={this._renderScene}
            renderTabBar={this._renderTabBar}
            onIndexChange={this._handleIndexChange}
          />
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 30}}>
          <TouchableHighlight
            style={{paddingTop: 15, alignItems: 'center'}}
            underlayColor="#fff"
            onPress={() => {
              this.state.index === 0
                ? this.props.navigation.push('XacNhanNapTienDienThoai', {
                    itemId: Math.floor(Math.random() * 100),
                  })
                : this.props.navigation.push('XacNhanMuaMaThe', {
                    itemId: Math.floor(Math.random() * 100),
                  });
            }}>
            <View style={styles.buttonTieptuc}>
              <Text style={{fontSize: 20, color: '#fff', textAlign: 'center'}}>
                Tiếp tục
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

class Card extends React.PureComponent {
  render() {
    const index = this.props.index;
    const value = this.props.value;

    return (
      <TouchableHighlight
        style={{
          width: 110,
          height: 60,
          justifyContent: 'center',
          marginRight: 20,
          marginTop: 20,
          padding: 5,
          alignItems: 'center',
          backgroundColor:
            selectedCardIndex === {index}
              ? 'rgba(43, 63, 81, 0.5)'
              : 'rgba(238, 238, 238, 1)',
        }}
        underlayColor="#fff"
        onPress={() => (selectedCardIndex = {index})}>
        <View>
          <Text style={styles.textInCard}>{value}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: 14,
    paddingHorizontal: 5,
  },
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
  },
  dropdownContainer: {
    paddingVertical: 3,
    paddingLeft: 12,
    width: 340,
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
  buttonTieptuc: {
    margin: 7,
    width: 356,
    height: 51,
    backgroundColor: '#2B3F51',
    justifyContent: 'center',
  },
  card: {
    width: 110,
    height: 60,
    justifyContent: 'center',
    marginRight: 20,
    marginTop: 20,
    padding: 8,
    alignItems: 'center',
  },
  textInCard: {
    fontSize: 16,
    color: 'black',
    alignItems: 'center',
  },
});
