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
  TouchableOpacity,
} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import {TabView, SceneMap} from 'react-native-tab-view';
import Animated from 'react-native-reanimated';

let dataBanks = [
  {value: {account: 'Ngân hàng thương mại cổ phần Á châu - ACB', amount: ''}},
  {
    value: {
      account: 'Ngân hàng Nông nghiệp và phát triển nông thôn - Agribank',
      amount: '',
    },
  },
  {value: {account: 'Ngân hàng ABCXYZ', amount: ''}},
];

let dataBankBranchs = [
  {value: {account: 'Chi nhánh X', amount: ''}},
  {
    value: {
      account: 'Chi nhánh Y',
      amount: '',
    },
  },
  {value: {account: 'Chi nhánh Z', amount: ''}},
];

const TextDisplay = props => {
  const {amount, account} = props;
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.dropdownContainer}>
        <View style={{}}>
          <Text style={styles.value}>{account}</Text>
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

export default class ScreenChonTaiKhoanThuHuong extends React.Component {
  static navigationOptions = ({navigationOptions}) => {
    console.log(navigationOptions);
    return {
      // title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      title: 'ĐẾN THỤ HƯỞNG',
    };
  };

  state = {
    showInfor: false,
    index: 0,
    routes: [
      {key: 'TaiKhoan', title: 'Tài khoản'},
      {key: 'TheNganHang', title: 'Thẻ ngân hàng'},
      {key: 'CMND', title: 'CMND/Hộ chiếu'},
    ],
  };

  _handleIndexChange = index => {
    this.setState({index, showInfor: false});
    console.log(this.state.index);
  };

  _renderTabBar = props => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => this.setState({index: i})}>
              <Animated.Text style={{color: 'black', fontSize: 16}}>
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  toggleInfor = () => {
    this.setState({
      showInfor: !this.state.showInfor,
    });
  };

  TaiKhoanView = () => {
    return (
      <View style={{paddingTop: 15, paddingHorizontal: 10}}>
        <View style={styles.box}>
          <View style={styles.inputContainer}>
            <View style={styles.textContainer}>
              <View style={{}}>
                <Text style={styles.title}>Tìm tài khoản thụ hưởng</Text>
              </View>
              <View style={{paddingVertical: 10, paddingLeft: 12, width: 280}}>
                <View style={{}}>
                  <TextInput
                    style={{
                      fontSize: 16,
                      height: 20,
                      fontWeight: 'bold',
                      paddingVertical: -5,
                      paddingLeft: -2,
                    }}
                  />
                </View>
              </View>
              <View style={styles.line} />
            </View>
            <View>
              <TouchableHighlight
                onPress={() => this.toggleInfor()}
                underlayColor="#fff">
                <View style={[styles.btn, styles.btnKiemtra]}>
                  <Text style={styles.textInButton}>Kiểm tra</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  };

  TheNganHangView = () => {
    return (
      <View style={{paddingTop: 15, paddingHorizontal: 10}}>
        <View style={styles.box}>
          <View style={styles.inputContainer}>
            <View style={styles.textContainer}>
              <View style={{}}>
                <Text style={styles.title}>Tìm số thẻ thụ hưởng</Text>
              </View>
              <View style={{paddingVertical: 10, paddingLeft: 12, width: 280}}>
                <View style={{}}>
                  <TextInput
                    style={{
                      fontSize: 16,
                      height: 20,
                      fontWeight: 'bold',
                      paddingVertical: -5,
                      paddingLeft: -2,
                    }}
                  />
                </View>
              </View>
              <View style={styles.line} />
            </View>
            <View>
              <TouchableHighlight
                onPress={() => this.toggleInfor()}
                underlayColor="#fff">
                <View style={[styles.btn, styles.btnKiemtra]}>
                  <Text style={styles.textInButton}>Kiểm tra</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  };

  CMNDView = () => {
    return (
      <View style={{paddingTop: 15, paddingHorizontal: 10}}>
        <View style={styles.box}>
          <View style={styles.inputContainer}>
            <View style={styles.textContainer}>
              <View style={{}}>
                <Text style={styles.title}>Tìm số CMND/Hộ chiếu</Text>
              </View>
              <View style={{paddingVertical: 10, paddingLeft: 12, width: 280}}>
                <View style={{}}>
                  <TextInput
                    style={{
                      fontSize: 18,
                      height: 20,
                      paddingVertical: -5,
                      paddingLeft: -2,
                    }}
                  />
                </View>
              </View>
              <View style={styles.line} />
            </View>
            <View>
              <TouchableHighlight
                onPress={() => this.toggleInfor()}
                underlayColor="#fff">
                <View style={[styles.btn, styles.btnKiemtra]}>
                  <Text style={styles.textInButton}>Kiểm tra</Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.textContainer}>
              <View style={{}}>
                <Text style={styles.title}>Ngày cấp</Text>
              </View>
              <View style={{paddingVertical: 10, paddingLeft: 12}}>
                <View style={{}}>
                  <TextInput
                    style={{
                      fontSize: 18,
                      height: 20,
                      paddingVertical: -5,
                      paddingLeft: -2,
                    }}
                    placeholder={'dd/mm/yyyy'}
                  />
                </View>
              </View>
              <View style={styles.line} />
            </View>
            <View style={[styles.textContainer, {marginLeft: 20}]}>
              <View style={{}}>
                <Text style={styles.title}>Nơi cấp</Text>
              </View>
              <View style={{paddingVertical: 10, paddingLeft: 12}}>
                <View style={{}}>
                  <TextInput
                    style={{
                      fontSize: 18,
                      height: 20,
                      paddingVertical: -5,
                      paddingLeft: -2,
                    }}
                  />
                </View>
              </View>
              <View style={styles.line} />
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.inputContainer}>
            <View style={styles.textContainer}>
              <View style={{}}>
                <Text style={styles.title}>Ngân hàng</Text>
              </View>
              <Dropdown
                dropdownOffset={{top: 100}}
                rippleCentered={true}
                data={dataBanks}
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
                <Text style={styles.title}>Chi nhánh</Text>
              </View>
              <Dropdown
                dropdownOffset={{top: 100}}
                rippleCentered={true}
                data={dataBankBranchs}
                renderBase={renderBase}
                itemTextStyle={styles.value}
                subtitleStyle={styles.description}
                itemPadding={15}
              />
            </View>
          </View>
          <View style={styles.line} />
        </View>
      </View>
    );
  };

  _renderScene = SceneMap({
    TaiKhoan: this.TaiKhoanView,
    TheNganHang: this.TheNganHangView,
    CMND: this.CMNDView,
  });

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    // eslint-disable-next-line no-unused-vars
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <View style={{height: 400}}>
          <TabView
            navigationState={this.state}
            renderScene={this._renderScene}
            renderTabBar={this._renderTabBar}
            onIndexChange={this._handleIndexChange}
          />
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginHorizontal: 10,
            marginBottom: 20,
          }}>
          {this.state.showInfor ? <InforAccount /> : <RecentlyCards />}

          <TouchableHighlight
            style={{paddingTop: 15, alignItems: 'center'}}
            underlayColor="#fff"
            onPress={() => {
              this.props.navigation.push('ChuyenTien', {
                itemId: Math.floor(Math.random() * 100),
              });
            }}
            disabled={!this.state.showInfor}>
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

class InforAccount extends React.Component {
  render() {
    return (
      <View>
        <View style={{}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'rgba(0, 0, 0, 0.54)',
            }}>
            Thông tin tài khoản thụ hưởng
          </Text>
        </View>

        <View style={styles.box}>
          <View style={styles.inputContainer}>
            <View style={styles.textContainer}>
              <View style={{marginTop: 15}}>
                <Text style={styles.title}>Tên chủ tài khoản</Text>
              </View>
              <View style={{marginVertical: 5, marginHorizontal: 15}}>
                <Text style={{fontSize: 18, color: 'black'}}>
                  DANG MINH TIEN
                </Text>
              </View>
              <View style={styles.line} />
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.inputContainer}>
            <View style={styles.textContainer}>
              <View style={{marginTop: 5}}>
                <Text style={styles.title}>Tỉnh/Thành phố</Text>
              </View>
              <View style={{marginVertical: 5, marginHorizontal: 15}}>
                <Text style={{fontSize: 18, color: 'black'}}>Bến Tre</Text>
              </View>
            </View>
            <View style={styles.textContainer}>
              <View style={{marginTop: 5}}>
                <Text style={styles.title}>Chi nhánh</Text>
              </View>
              <View style={{marginVertical: 5, marginHorizontal: 15}}>
                <Text style={{fontSize: 18, color: 'black'}}>Đồng Khởi</Text>
              </View>
            </View>
          </View>
          <View style={styles.line} />
        </View>
      </View>
    );
  }
}

class RecentlyCards extends React.Component {
  render() {
    return (
      <View>
        <View style={{marginTop: 10}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'rgba(0, 0, 0, 0.54)',
            }}>
            Chuyển tiền gần đây
          </Text>
        </View>

        <View style={{flexDirection: 'column', marginTop: 20}}>
          <View style={{flexDirection: 'row'}}>
            <Card name={'NG. THANH LUAN'} stk={'1214.00014.44589'} />
            <Card name={'DANG MINH TIEN'} stk={'7291.00000.80137'} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Card name={'NGUYEN DONG QUAN'} stk={'1201.80137.11015'} />
            <Card name={'NGUYEN BA TUNG'} stk={'7829.82749.73321'} />
          </View>
        </View>
      </View>
    );
  }
}

class Card extends React.PureComponent {
  render() {
    const name = this.props.name;
    const stk = this.props.stk;

    return (
      <TouchableHighlight
        style={{
          width: 179,
          height: 58,
          marginRight: 20,
          marginBottom: 15,
          padding: 8,
          backgroundColor: 'rgba(210, 210, 210, 0.2)',
        }}
        underlayColor="#fff"
        //onPress={() => (selectedCardIndex = {index})}
      >
        <View style={{flexDirection: 'column'}}>
          <Text
            style={{
              fontSize: 16,
              color: 'rgba(57, 57, 57, 1)',
              fontWeight: 'bold',
            }}>
            {name}
          </Text>
          <Text style={{fontSize: 14, color: 'rgba(98, 98, 98, 1)'}}>
            {stk}
          </Text>
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
  buttonTieptuc: {
    margin: 7,
    width: 356,
    height: 51,
    backgroundColor: '#2B3F51',
    justifyContent: 'center',
  },
  icon: {
    height: 26,
    width: 26,
    resizeMode: 'stretch',
    justifyContent: 'center',
  },
  dropdownContainer: {
    paddingVertical: 3,
    paddingLeft: 12,
    width: 340,
  },
});
