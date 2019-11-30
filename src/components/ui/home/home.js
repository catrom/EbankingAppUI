import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

export default class ScreenHome extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.home}>
        <Text>Home Screen</Text>
        <Button
          title="Tai Khoan"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('DanhSachTaiKhoan', {
              itemId: 80,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
