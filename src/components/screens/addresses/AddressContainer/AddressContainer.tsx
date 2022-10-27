import { FC } from 'react'
import Skeleton from 'src/components/screens/addresses/AddressContainer/Skeleton'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import AddressList from './AddressList'
import styles from './AddressContainer.module.scss'

const AddressContainer: FC = () => {
  const addresses = useTypedSelector((state) => state.address.data)
  const isLoading = useTypedSelector((state) => state.address.isLoading)

  if (!addresses.length) {
    return null
  }

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <div className={styles.title}>Адреса</div>
          <AddressList items={addresses} />
        </>
      )}
    </div>
  )
}

export default AddressContainer
