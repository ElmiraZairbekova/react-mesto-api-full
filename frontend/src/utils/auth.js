const BASE_URL = 'https://api.mesto.education.nomoredomains.icu';
// const BASE_URL = 'https://auth.nomoreparties.co';
// const request = async ({
//   url,
//   method = 'POST',
//   token,
//   data,
// }) => {
//   const response = await fetch(`${BASE_URL}${url}`, {
//     method,
//     headers: {
//       'Content-Type': 'application/json',
//       ...!!token && { 'Authorization': `Bearer ${token}` },
//     },
//     ...!!data && { body: JSON.stringify(data) },
//   });
//   const json = await response.json();
//   return response.ok ? json : Promise.reject(json.message);
// }

// export function registerUser (email, password) {
//   return request({
//     url: '/signup',
//     data: { email, password },
//   })
// };

// export function loginUser (email, password) {
//   return request({
//     url: '/signin',
//     data: { email, password },
//   })
// };

// export function getToken (token) {
//   return request({
//     url: '/users/me',
//     method: 'GET',
//     token,
//   })
// }

export function registerUser(email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(checkRes);
}

export function loginUser(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then(checkRes);
}

export function getToken(jwt) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    },
  }).then(checkRes);
}

function checkRes(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
}