export default class UserInfo {
  constructor(userInfoSelector) {
    this._userName = document.querySelector(userInfoSelector.name);
    this._userStatus =  document.querySelector(userInfoSelector.status);
  }
  getUserInfo() {
    
    const userInfoValue = {
      name: this._userName.textContent,
      status: this._userStatus.textContent
    };
    return userInfoValue
  }
  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userStatus.textContent = data.status
  }
}