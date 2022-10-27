import { FC } from 'react'
import AddressContainer from './AddressContainer/AddressContainer'
import SearchForm from 'src/components/ui/search-form/SearchForm'
import styles from './Addresses.module.scss'

const Addresses: FC = () => {
  return (
    <div className={styles.address}>
      <div className={styles.title}>Поиск адресов</div>
      <div className={styles.subtitle}>Введите интересующий вас адрес</div>
      <div className={styles.search}>
        <SearchForm />
      </div>
      <AddressContainer />
    </div>
  )
}

export default Addresses
