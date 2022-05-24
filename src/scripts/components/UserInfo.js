export default class UserInfo {
  constructor(userInfoSelector) {
    this._userName = document.querySelector(userInfoSelector.name);
    this._userStatus =  document.querySelector(userInfoSelector.status);
    this._userAvatar = document.querySelector(userInfoSelector.avatar);
  }
  getUserInfo() {
    
    const userInfoValue = {
      name: this._userName.textContent,
      about: this._userStatus.textContent
    };
    return userInfoValue
  }
  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userStatus.textContent = data.about
  }
  setUserAvatar(data) {
    this._userAvatar.src = `${data.avatar}`
  }
}