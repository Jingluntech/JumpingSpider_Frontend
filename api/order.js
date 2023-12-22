const baseURL = process.env.NEXT_PUBLIC_BASE_API;

const fetcher = async (url, { token, payload }) => {
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
    body: JSON.stringify({ ...payload }),
  });

  return response.json();
};

export const createOrderAPI = async ({ token, payload }) => {
  try {
    const response = await fetcher(`${baseURL}/api/vpn/createOrder`, {
      token,
      payload,
    });

    return response;
  } catch (error) {
    console.log('[Failed to create order]: ', error);
  }
};

export const getOrdersAPI = async ({ token, payload }) => {
  try {
    const response = await fetcher(`${baseURL}/api/vpn/queryVpnOrder`, {
      token,
      payload,
    });

    return response;
  } catch (error) {
    console.log('[Failed to get orders]: ', error);
  }
};
