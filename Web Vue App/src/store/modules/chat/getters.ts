import { GetterTree } from 'vuex';
import { ChatState } from './state';
import { RootState } from '../../index';

const getters: GetterTree<ChatState, RootState> = {
  socket(state) {
    return state.socket;
  },
  dropped(state) {
    return state.dropped;
  },
  activeGroupUser(state) {
    return state.activeGroupUser;
  },

  selectUser(state) {
    return state.selectUser
  },

  activeRoom(state) {
    return state.activeRoom;
  },
  groupGather(state) {
    return state.groupGather;
  },
  friendGather(state) {
    return state.friendGather;
  },
  userGather(state) {
    return state.userGather;
  },
  unReadGather(state) {
    return state.unReadGather;
  },
  getUserInfo(state) {
    return state.userInfo;
  }
};

export default getters;
