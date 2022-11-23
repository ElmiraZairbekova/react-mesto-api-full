// class Api {
//   constructor(options) {
//     this._baseUrl = options.baseUrl;
//     this._headers = options.headers;
//   }

//   _checkResponse(res) {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`${res.status} ${res.statusText}`);
//   }

//   _getHeaders() {
//     const jwt = localStorage.getItem('jwt');
//     return {
//       'Authorization': `Bearer ${jwt}`,
//       ...this._headers,
//     };
//   }

//   getUserInfo() {
//     return fetch(`${this._baseUrl}/users/me`, {
//       headers: this._getHeaders(),
//     }).then((res) => {
//       return this._checkResponse(res);
//     });
//   }

//   getInitialCards() {
//     return fetch(`${this._baseUrl}/cards`, {
//       headers: this._getHeaders(),
//     }).then((res) => {
//       return this._checkResponse(res);
//     });
//   }

//   updateUserInfo(data) {
//     return fetch(`${this._baseUrl}/users/me`, {
//       method: 'PATCH',
//       headers: this._getHeaders(),
//       body: JSON.stringify({
//         name: data.profile_name,
//         about: data.profile_description,
//       }),
//     }).then((res) => {
//       return this._handleRes(res);
//     });
//   }

//   addNewCard(data) {
//     return fetch(`${this._baseUrl}/cards`, {
//       method: 'POST',
//       headers: this._getHeaders(),
//       body: JSON.stringify({
//         name: data.name,
//         link: data.link,
//       }),
//     }).then((res) => {
//       return this._checkResponse(res);
//     });
//   }

//   removeCard(data) {
//     return fetch(`${this._baseUrl}/cards/${data._id}`, {
//       method: 'DELETE',
//       headers: this._getHeaders(),
//     }).then((res) => {
//       return this._handleRes(res);
//     });
//   }

//   addCardLike(cardId) {
//     return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
//       method: 'PUT',
//       headers: this._getHeaders(),
//     }).then((res) => {
//       return this._checkResponse(res);
//     });
//   }

//   deleteCardLike(cardId) {
//     return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
//       method: 'DELETE',
//       headers: this._getHeaders(),
//     }).then((res) => {
//       return this._checkResponse(res);
//     });
//   }

//   updateProfileAvatar(data) {
//     return fetch(`${this._baseUrl}/users/me/avatar`, {
//       method: 'PATCH',
//       headers: this._getHeaders(),
//       body: JSON.stringify({
//         avatar: data.avatarLink,
//       }),
//     }).then((res) => {
//       return this._checkResponse(res);
//     });
//   }
// }

// const api = new Api({
//   baseUrl: 'https://api.mesto.education.nomoredomains.icu',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });
// export default api;








class Api {
  constructor({ headers, baseUrl }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status} ${res.statusText}`);
    }
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  getUserInfo() {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    });
  }

  getInitialCards() {
    return this._request(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    });
  }

  updateUserInfo(data) {
    return this._request(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.profile_name,
        about: data.profile_description,
      }),
    });
  }

  addNewCard(data) {
    return this._request(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    });
  }

  removeCard(data) {
    return this._request(`${this._baseUrl}/cards/${data._id}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  addCardLike(cardId) {
    return this._request(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    });
  }

  deleteCardLike(cardId) {
    return this._request(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  updateProfileAvatar(data) {
    return this._request(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatarLink,
      }),
    });
  }
}
// Удалить потом
// const api = new Api({
//   baseUrl: "https://mesto.nomoreparties.co/v1/cohort-47",
//   headers: {
//     authorization: "cbd1d19b-554f-435c-9a41-b799d284e240",
//     "Content-Type": "application/json",
//   },
// });
const api = new Api({
  baseUrl: 'https://api.mesto.education.nomoredomains.icu',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default api;
