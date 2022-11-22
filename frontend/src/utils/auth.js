const BASE_URL = 'https://api.mesto.education.nomoredomains.icu';

const request = async ({
  url,
  method = 'POST',
  jwt,
  data,
}) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...!!jwt && { 'Authorization': `Bearer ${jwt}` },
    },
    ...!!data && { body: JSON.stringify(data) },
  });
  const json = await response.json();
  return response.ok ? json : Promise.reject(json.message);
}

export function registerUser (email, password) {
  return request({
    url: '/signup',
    data: { email, password },
  })
};

export function loginUser (email, password) {
  return request({
    url: '/signin',
    data: { email, password },
  })
};

export function getToken (jwt) {
  return request({
    url: '/users/me',
    method: 'GET',
    jwt,
  })
}
