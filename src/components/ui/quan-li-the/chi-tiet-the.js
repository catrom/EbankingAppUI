/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Modal,
  Button,
  TouchableHighlight,
} from 'react-native';

export default class ScreenChiTietThe extends React.Component {
  static navigationOptions = ({navigationOptions}) => {
    return {
      title: 'THÔNG TIN THẺ',
    };
  };

  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
    console.log(this.state.isModalVisible);
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
              source={require('app/src/assets/icons/info.png')}
              style={{
                resizeMode: 'stretch',
                height: 22,
                width: 22,
              }}
            />
          </View>
          <View>
            <Text style={{fontSize: 18, color: '#1885EA', marginLeft: 10}}>
              Đang hoạt động
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

        <View style={{paddingTop: 10, alignItems: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <ImageBackground
              source={require('app/src/assets/icons/back.png')}
              style={styles.iconMovePage}
              underlayColor="#fff"
            />
            <Text style={{color: 'rgba(0, 0, 0, 0.5)', fontSize: 16}}>
              Trang 1/10
            </Text>
            <ImageBackground
              source={require('app/src/assets/icons/next.png')}
              style={styles.iconMovePage}
              underlayColor="#fff"
            />
          </View>
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

        <Modal visible={this.state.isModalVisible}>
          <View style={{flex: 1}}>
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={this.toggleModal} />
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
});
