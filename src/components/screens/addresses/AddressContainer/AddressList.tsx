import { FC } from 'react'
import { IAddress } from 'src/models/IAddress'
import AddressItem from './AddressItem'

interface IAddressList {
  items: IAddress[]
}

const AddressList: FC<IAddressList> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <AddressItem key={item.data.geo_lat + item.data.geo_lon} item={item} />
      ))}
    </ul>
  )
}

export default AddressList
