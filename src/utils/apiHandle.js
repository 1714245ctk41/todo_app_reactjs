import { APIS } from '../constans'
import { fetchCustom } from './fetch'

export const register = async ({formValue}) => {
  const response = await fetchCustom({
    input: `${APIS.REGISTER}`,
    init: {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValue)
  },
  })

  return response;
}