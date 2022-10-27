import axios from 'axios'
import { APP_SERVER_URL, getHeaders } from 'src/api/api'
import { IAddressResponse } from 'src/store/address/address-interface'

export const AddressService = {
  async getData(query: string) {
    return await axios.post<IAddressResponse>(
      APP_SERVER_URL,
      { query },
      {
        headers: getHeaders(),
      },
    )
  },
}
