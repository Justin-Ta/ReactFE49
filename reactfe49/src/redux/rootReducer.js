// Quản lý tất cả các state của ứng dụng
import { combineReducers } from "redux";
// import { GioHangReducer} from './GioHangReducer';
import {GamePlay123, GamePlay123Reducer} from './GamePlay123Reducer';
import BaiTapQuanLySinhVienReducer from './BaiTapQuanLySinhVienReducer';
export const rootReducers = combineReducers({
  // Khai báo các state của ứng dụng
  // GioHangReducer: GioHangReducer
  // GamePlay123Reducer: GamePlay123Reducer,
  BaiTapQuanLySinhVienReducer
});
