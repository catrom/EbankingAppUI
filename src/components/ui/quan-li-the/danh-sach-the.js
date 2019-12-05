/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
  TextInput,
  Modal,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

export default class ScreenDanhSachThe extends React.Component {
  static navigationOptions = ({navigation}) => {
    console.log(navigation);

    return {
      // title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      title: 'DANH SÁCH THẺ',
      headerRight: (
        <TouchableHighlight
          underlayColor="#2B3F51"
          style={styles.iconContainer}
          onPress={navigation.getParam('toggleModal')}>
          <ImageBackground
            source={require('app/src/assets/icons/filter.png')}
            style={styles.iconFilter}
          />
        </TouchableHighlight>
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({toggleModal: this._toggleModal});
  }

  state = {
    isModalVisible: false,
  };

  _toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  getInitialState() {
    return {
      value: 0,
    };
  }

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    // eslint-disable-next-line no-unused-vars
    const {navigation} = this.props;
    var radio_props = [
      {label: 'Tất cả', value: 0},
      {label: 'Đang hoạt động', value: 1},
      {label: 'Đã đóng', value: 2},
    ];

    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.push('ChiTietThe', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
          underlayColor="#fff">
          <View style={styles.itemContainer}>
            <View>
              <ImageBackground
                source={require('app/src/assets/images/card1.png')}
                style={styles.image}
              />
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight>
          <View style={styles.itemContainer}>
            <View>
              <ImageBackground
                source={require('app/src/assets/images/card2.jpg')}
                style={styles.image}
              />
            </View>
          </View>
        </TouchableHighlight>

        <View style={{paddingTop: 130, alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight underlayColor="#fff">
              <ImageBackground
                source={require('app/src/assets/icons/back.png')}
                style={styles.iconMovePage}
              />
            </TouchableHighlight>
            <Text style={{color: 'rgba(0, 0, 0, 0.5)', fontSize: 16}}>
              Trang 1/10
            </Text>
            <TouchableHighlight underlayColor="#fff">
              <ImageBackground
                source={require('app/src/assets/icons/next.png')}
                style={styles.iconMovePage}
              />
            </TouchableHighlight>
          </View>
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
                  BỘ LỌC
                </Text>
              </View>
              <View style={{margin: 30, flexDirection: 'row'}}>
                <View>
                  <RadioForm formHorizontal={false} animation={true}>
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
                          buttonWrapStyle={{marginLeft: 7}}
                        />
                        <RadioButtonLabel
                          obj={obj}
                          index={i}
                          labelHorizontal={false}
                          onPress={value => {
                            this.setState({value: value});
                          }}
                          labelStyle={{
                            fontSize: 17,
                            color: 'black',
                            marginLeft: 10,
                            marginTop: -7,
                          }}
                        />
                      </RadioButton>
                    ))}
                  </RadioForm>
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableHighlight
                  onPress={() => this._toggleModal()}
                  underlayColor="rgba(102, 118, 133, 0.3)">
                  <View style={[styles.btn, styles.btnHuyBo]}>
                    <Text style={styles.textInButton}>Huỷ bỏ</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => this._toggleModal()}
                  underlayColor="rgba(43, 63, 81, 0.3)">
                  <View style={[styles.btn, styles.btnDongY]}>
                    <Text style={styles.textInButton}>Áp dụng</Text>
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
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    height: 210,
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
  },
  image: {
    resizeMode: 'stretch',
    justifyContent: 'center',
    height: 210,
  },
  iconContainer: {
    flexDirection: 'row',
    margin: 20,
  },
  iconFilter: {
    height: 26,
    width: 26,
    resizeMode: 'stretch',
    marginLeft: 5,
  },
  iconMovePage: {
    height: 26,
    width: 26,
    resizeMode: 'stretch',
  },
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewInModal: {
    width: 374,
    height: 240,
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
    marginTop: -10,
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
