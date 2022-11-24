class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`${res.status} ${res.statusText}`);
  }

  _getHeaders() {
    const jwt = localStorage.getItem('jwt');
    return {
      'Authorization': `Bearer ${jwt}`,
      ...this._headers,
    };
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._getHeaders(),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._getHeaders(),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  updateUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.profile_name,
        about: data.profile_description,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  addNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  removeCard(data) {
    return fetch(`${this._baseUrl}/cards/${data._id}`, {
      method: 'DELETE',
      headers: this._getHeaders(),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  addCardLike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._getHeaders(),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  deleteCardLike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._getHeaders(),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }


  updateProfileAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        avatar: data.avatarLink,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

const api = new Api({
  baseUrl: 'https://api.mesto.education.nomoredomains.icu',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default api;
