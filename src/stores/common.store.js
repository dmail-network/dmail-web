import { makeAutoObservable, observable, computed, toJS } from 'mobx';
// import * as api from '@/requests/common';

export default class CommonStore {
  // pageName = 'Home'
  // showSearch = false
  unReadList = {
    Compose: 22,
    Inbox: 1,
  }

  constructor() {
    makeAutoObservable(this)
    // this.siteName = SiteName
  }

  setUnReadList (list) {
    this.unReadList = list
  }

  // setShowSearch (status) {
  //   this.showSearch = status
  // }
}
