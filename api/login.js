const baseURL = process.env.NEXT_PUBLIC_BASE_API;

const fetcher = async (url) => {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export const requestLoginAPI = async (payload) => {
  try {
    const response = await fetch(`${baseURL}/api/scan/requestLogin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return response.json();
  } catch (error) {
    console.log('[Failed to request login]: ', error);
  }
};

export const loginAPI = async (payload) => {
  try {
    const response = await fetch(`${baseURL}/api/scan/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return response.json();
  } catch (error) {
    console.log('[Failed to login]: ', error);
  }
};

export const logoutAPI = async (payload) => {
  try {
    const response = await fetch(`${baseURL}/api/scan/logout`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return response.json();
  } catch (error) {
    console.log('[Failed to login]: ', error);
  }
};
