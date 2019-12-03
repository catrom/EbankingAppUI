import {createStackNavigator} from 'react-navigation-stack';

import {
  Home as ScreenHome,
  DanhSachTaiKhoan as ScreenDanhSachTaiKhoan,
  TaiKhoanThanhToan as ScreenTaiKhoanThanhToan,
  ThongTinTaiKhoan as ScreenThongTinTaiKhoan,
} from './index';

const RootStack = createStackNavigator(
  {
    Home: ScreenHome,
    DanhSachTaiKhoan: ScreenDanhSachTaiKhoan,
    TaiKhoanThanhToan: ScreenTaiKhoanThanhToan,
    ThongTinTaiKhoan: ScreenThongTinTaiKhoan,
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#2B3F51',
        height: 64,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    },
    headerLayoutPreset: 'center',
  },
);

export default RootStack;
