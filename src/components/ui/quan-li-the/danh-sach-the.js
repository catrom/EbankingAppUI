/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

export default class ScreenDanhSachThe extends React.Component {
  static navigationOptions = ({navigationOptions}) => {
    console.log(navigationOptions);
    return {
      // title: navigation.getParam('otherParam', 'A Nested Details Screen'),
      title: 'DANH SÁCH THẺ',
      headerRight: (
        <TouchableHighlight
          style={styles.iconContainer}
          onPress={() =>
            this.props.navigation.push('Home', {
              itemId: Math.floor(Math.random() * 100),
            })
          }>
          <ImageBackground
            source={require('app/src/assets/icons/filter.png')}
            style={styles.iconFilter}
          />
        </TouchableHighlight>
      ),
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
});
