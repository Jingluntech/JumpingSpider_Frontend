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

export const getUserInfoAPI = async ({ token, payload }) => {
  try {
    const response = await fetcher(`${baseURL}/api/vpn/getUserInfo`, {
      token,
      payload,
    });

    return response;
  } catch (error) {
    console.log('[Failed to user info]: ', error);
  }
};

export const getDevicesAPI = async ({ token, payload }) => {
  try {
    const response = await fetcher(`${baseURL}/api/vpn/getUserDevice`, {
      token,
      payload,
    });

    return response;
  } catch (error) {
    console.log('[Failed to get devices]: ', error);
  }
};
