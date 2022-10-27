import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAddress } from 'src/models/IAddress'
import { getAddresses } from 'src/store/address/addressActions'
import { AddressState } from './types'

const initialState: AddressState = {
  data: [],
  isLoading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [getAddresses.pending.type]: (state) => {
      state.isLoading = true
    },
    [getAddresses.fulfilled.type]: (state, action: PayloadAction<IAddress[]>) => {
      state.data = action.payload
      state.isLoading = false
    },
    [getAddresses.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
    },
  },
})

export const { reducer: addressReducer } = userSlice
