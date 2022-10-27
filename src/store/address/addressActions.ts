import { createAsyncThunk } from '@reduxjs/toolkit'
import { AddressService } from 'src/service/AddressService'

export const getAddresses = createAsyncThunk(
  'get/data',
  async (searchQuery: string, thunkApi) => {
    try {
      const { data } = await AddressService.getData(searchQuery)
      return data.suggestions
    } catch (e) {
      return thunkApi.rejectWithValue(e)
    }
  },
)
