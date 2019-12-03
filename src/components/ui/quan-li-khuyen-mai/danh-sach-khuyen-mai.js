/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

export default class ScreenDanhSachKhuyenMai extends React.Component {
  static navigationOptions = ({navigationOptions}) => {
    console.log(navigationOptions);
    return {
      // title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      title: 'TIN TỨC - KHUYẾN MÃI',
    };
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    // eslint-disable-next-line no-unused-vars
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.push('ChiTietKhuyenMai', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
          underlayColor="rgba(218, 218, 218, 1)">
          <View style={styles.itemContainer}>
            <View style={{marginTop: 15, marginLeft: 5, marginRight: 5}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.title}>Ưu Đãi Khách Hàng Ưu Tiên Mới</Text>
                <ImageBackground
                  source={require('app/src/assets/icons/next.png')}
                  style={styles.icon}
                />
              </View>
              <Text style={styles.date}>Đăng ngày: 10/11/2019</Text>
            </View>

            <View style={{marginTop: 10}}>
              <ImageBackground
                source={require('app/src/assets/images/promotion1.png')}
                style={styles.image}
              />
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="rgba(218, 218, 218, 1)">
          <View style={styles.itemContainer}>
            <View style={{marginTop: 15, marginLeft: 5, marginRight: 5}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.title}>
                  Chương Trình Tích Luỹ Điểm Đổi Quà
                </Text>
                <ImageBackground
                  source={require('app/src/assets/icons/next.png')}
                  style={styles.icon}
                />
              </View>
              <Text style={styles.date}>Đăng ngày: 08/11/2019</Text>
            </View>

            <View style={{marginTop: 10}}>
              <ImageBackground
                source={require('app/src/assets/images/promotion2.png')}
                style={styles.image}
              />
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="rgba(218, 218, 218, 1)">
          <View style={styles.itemContainer}>
            <View style={{marginTop: 15, marginLeft: 5, marginRight: 5}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.title}>
                  Thông Báo Thay Đổi Ngày Trả Lãi Tài Khoản...
                </Text>
                <ImageBackground
                  source={require('app/src/assets/icons/next.png')}
                  style={styles.icon}
                />
              </View>
              <Text style={styles.date}>Đăng ngày: 07/11/2019</Text>
            </View>

            <View style={{marginTop: 10}}>
              <ImageBackground
                source={require('app/src/assets/images/promotion3.png')}
                style={styles.image}
              />
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={{paddingTop: 15, alignItems: 'center'}}
          underlayColor="rgba(187, 191, 193, 0.2)">
          <View style={styles.buttonNext}>
            <Text style={styles.textInButton}>Xem tiếp...</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

// class PromotionItem extends React.PureComponent {
//   render() {
//     const title = this.props.title;
//     const date = this.props.date;
//     const image = this.props.image;

//     return (
//       <TouchableHighlight
//         onPress={() =>
//           this.props.navigation.push('ChiTietKhuyenMai', {
//             itemId: Math.floor(Math.random() * 100),
//           })
//         }
//         underlayColor="rgba(218, 218, 218, 1)">
//         <View style={styles.itemContainer}>
//           <View style={{marginTop: 15, marginLeft: 5, marginRight: 5}}>
//             <View
//               style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//               <Text style={styles.title}>{title}</Text>
//               <ImageBackground
//                 source={require('app/src/assets/icons/next.png')}
//                 style={styles.icon}
//               />
//             </View>
//             <Text style={styles.date}>{date}</Text>
//           </View>

//           <View style={{marginTop: 10}}>
//             <ImageBackground source={image} style={styles.image} />
//           </View>
//         </View>
//       </TouchableHighlight>
//     );
//   }
// }

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
    backgroundColor: 'rgba(218, 218, 218, 0.5)',
    height: 180,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  title: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.87)',
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.87)',
    fontWeight: 'normal',
  },
  image: {
    resizeMode: 'stretch',
    justifyContent: 'center',
    height: 110,
  },
  buttonNext: {
    margin: 7,
    width: 356,
    height: 51,
    backgroundColor: '#2B3F51',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInButton: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  icon: {
    height: 26,
    width: 26,
    resizeMode: 'stretch',
  },
});
