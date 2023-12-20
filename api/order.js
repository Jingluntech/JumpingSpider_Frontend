import Cookies from 'js-cookie';

const baseURL = process.env.NEXT_PUBLIC_BASE_API;

const fetcher = async (url, { payload }) => {
  const token = Cookies.get('Token');

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
    headers['X-Auth-Token'] = token;
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(payload),
  });

  return response.json();
};

export const createOrderAPI = async (payload) => {
  try {
    const response = await fetcher(`${baseURL}/api/vpn/createOrder`, {
      payload,
    });

    return response;
  } catch (error) {
    console.log('[Failed to create order]: ', error);
  }
};
