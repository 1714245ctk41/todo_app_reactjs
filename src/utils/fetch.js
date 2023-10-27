import { getLocalStorage } from './localstorage';

export const fetchCustom = async ({input, init}) => {
  const headers = {};

  if (init?.authorization) {
    headers['Authorization'] = getLocalStorage('token');
  }
  
  console.log({
    ...init,
    headers: {
      ...headers,
      ...init?.headers,
    },
  }, 4234);
  const rs = await fetch(input, {
    ...init,
    headers: {
      ...headers,
      ...init?.headers,
    },
  });

  if (!rs.status) {
    const json = await rs.json();
    throw new Error(json?.message || 'ERR_SYSTEM');
  }

  const json = await rs.json();
  return json;
}