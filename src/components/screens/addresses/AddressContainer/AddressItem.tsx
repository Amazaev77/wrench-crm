import { FC } from 'react'
import { IAddress } from 'src/models/IAddress'
import styles from './AddressContainer.module.scss'

interface IAddressItem {
  item: IAddress
}

const AddressItem: FC<IAddressItem> = ({ item }) => {
  return (
    <a
      href={`https://www.pochta.ru/offices/${item.data.postal_code}`}
      className={styles.link}
      target='_blank'
      rel='noreferrer'
    >
      {item.unrestricted_value}
    </a>
  )
}

export default AddressItem
