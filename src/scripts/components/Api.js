import { data } from "autoprefixer";

export default class Api {
  constructor(token, groupId) {
    this._token = token;
    this._groupId = groupId;
  }
  _parseResponse(res) {
    if(res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }
  getUserInfo() {
    return fetch(`${this._groupId}users/me`, {
      headers: {
        authorization: this._token
      }
    })
    .then(res => this._parseResponse(res))
  }
  getCardItems() {
    return fetch(`${this._groupId}cards`, {
      headers: {
        authorization: this._token
      }
    })
    .then(res => this._parseResponse(res))
  }
  subUserInfo(data) {
    return fetch(`${this._groupId}users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    }).then(res => this._parseResponse(res))
  }
  subCardItem(data) {
    return fetch(`${this._groupId}cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
    .then(res => this._parseResponse(res))
  }
  subCardLike(data) {
    return fetch(`${this._groupId}cards/${data._id}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._token
      }
    })
    .then(res => this._parseResponse(res))
  }
  subAvatarPhoto(data) {
    return fetch(`${this._groupId}users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatar
      })
    }).then(res => this._parseResponse(res))
  }
  delCardLike(data) {
    return fetch(`${this._groupId}cards/${data._id}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(res => this._parseResponse(res))
  }
  delСardItem(data) {
    return fetch(`${this._groupId}cards/${data._id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(res => this._parseResponse(res))
  }
}