export default class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._job = document.querySelector(jobSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const userData = {
        name: this._name.textContent, 
        job: this._job.textContent,
        avatar: this._avatar.src
    };

    return userData;
  }

  setUserInfo({name, about, avatar}) {
    this._name.textContent = name; 
    this._job.textContent = about; 
    this._avatar.src = avatar; 
    this._avatar.alt = name; 
  }

  changeAvatar(avatar) {
    this._avatar.src = avatar;
  }
}