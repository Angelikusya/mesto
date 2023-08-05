export default class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._nameSelector = document.querySelector(nameSelector);
    this._jobSelector = document.querySelector(jobSelector);
    this._avatarSelector = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const userData = {
        name: this._nameSelector.textContent, 
        job: this._jobSelector.textContent
    };
    return userData;
  }

  setUserInfo({name, about, avatar}) {
    this._nameSelector.textContent = name; 
    this._jobSelector.textContent = about; 
    this._avatarSelector.src = avatar; 
    this._avatarSelector.alt = name; 
  }

  changeAvatar(avatar) {
    this._avatarSelector.src = avatar;
  }
}


