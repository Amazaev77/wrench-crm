import { ChangeEvent, FC, useState } from 'react'
import Button from 'src/components/ui/button/Button'
import SearchField from 'src/components/ui/search-field/SearchField'
import { useActions } from 'src/hooks/useActions'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import styles from './SearchForm.module.scss'

const SearchForm: FC = () => {
  const { getAddresses } = useActions()
  const [searchTerm, setSearchTerm] = useState('')
  const isLoading = useTypedSelector((state) => state.address.isLoading)

  const onSubmit = (event: any) => {
    event.preventDefault()

    if (searchTerm.length > 2) {
      getAddresses(searchTerm)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <SearchField
        value={searchTerm}
        onChange={handleChange}
        placeholder='Введите интересующий вас адрес'
      />
      <div className={styles.form_button}>
        <Button disabled={isLoading}>Поиск</Button>
      </div>
    </form>
  )
}

export default SearchForm
