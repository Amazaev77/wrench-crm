import cn from 'classnames'
import { FC, InputHTMLAttributes } from 'react'
import styles from './SearchField.module.scss'

interface ISearchField extends InputHTMLAttributes<HTMLInputElement> {}

const SearchField: FC<ISearchField> = ({ className, ...props }) => {
  return <input className={cn(styles.inp, className)} {...props} />
}

export default SearchField
