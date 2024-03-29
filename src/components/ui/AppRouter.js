import {createStackNavigator} from 'react-navigation-stack';

import {
  Home as ScreenHome,
  DanhSachTaiKhoan as ScreenDanhSachTaiKhoan,
  TaiKhoanThanhToan as ScreenTaiKhoanThanhToan,
  ThongTinTaiKhoan as ScreenThongTinTaiKhoan,
  DanhSachKhuyenMai as ScreenDanhSachKhuyenMai,
  ChiTietKhuyenMai as ScreenChiTietKhuyenMai,
  DanhSachThe as ScreenDanhSachThe,
  ChiTietThe as ScreenChiTietThe,
  ThanhToanHoaDon as ScreenThanhToanHoaDon,
  NhapHoaDonDien as ScreenNhapHoaDonDien,
  ChiTietGiaoDichHoaDon as ScreenChiTietGiaoDichHoaDon,
  NhapNapTienDienThoai as ScreenNhapNapTienDienThoai,
  XacNhanNapTienDienThoai as ScreenXacNhanNapTienDienThoai,
  XacNhanMuaMaThe as ScreenXacNhanMuaMaThe,
  ChiTietGiaoDichNapTien as ScreenChiTietGiaoDichNapTien,
  ChiTietGiaoDichMuaMaThe as ScreenChiTietGiaoDichMuaMaThe,
  ChuyenTien as ScreenChuyenTien,
  ChonTaiKhoanThuHuong as ScreenChonTaiKhoanThuHuong,
  XacNhanChuyenTien as ScreenXacNhanChuyenTien,
  ChiTietGiaoDichChuyenTien as ScreenChiTietGiaoDichChuyenTien,
} from './index';

const RootStack = createStackNavigator(
  {
    Home: ScreenHome,
    DanhSachTaiKhoan: ScreenDanhSachTaiKhoan,
    TaiKhoanThanhToan: ScreenTaiKhoanThanhToan,
    ThongTinTaiKhoan: ScreenThongTinTaiKhoan,
    DanhSachKhuyenMai: ScreenDanhSachKhuyenMai,
    ChiTietKhuyenMai: ScreenChiTietKhuyenMai,
    DanhSachThe: ScreenDanhSachThe,
    ChiTietThe: ScreenChiTietThe,
    ThanhToanHoaDon: ScreenThanhToanHoaDon,
    NhapHoaDonDien: ScreenNhapHoaDonDien,
    ChiTietGiaoDichHoaDon: ScreenChiTietGiaoDichHoaDon,
    NhapNapTienDienThoai: ScreenNhapNapTienDienThoai,
    XacNhanNapTienDienThoai: ScreenXacNhanNapTienDienThoai,
    XacNhanMuaMaThe: ScreenXacNhanMuaMaThe,
    ChiTietGiaoDichNapTien: ScreenChiTietGiaoDichNapTien,
    ChiTietGiaoDichMuaMaThe: ScreenChiTietGiaoDichMuaMaThe,
    ChuyenTien: ScreenChuyenTien,
    ChonTaiKhoanThuHuong: ScreenChonTaiKhoanThuHuong,
    XacNhanChuyenTien: ScreenXacNhanChuyenTien,
    ChiTietGiaoDichChuyenTien: ScreenChiTietGiaoDichChuyenTien,
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
