import { IAddress } from 'src/models/IAddress'

export interface AddressState {
  data: IAddress[]
  isLoading: boolean
  error: string | null
}
