import { ButtonHTMLAttributes, FC } from 'react'
import SvgIcon from 'src/components/ui/svg-icon/SvgIcon'
import styles from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<IButton> = ({ children }) => {
  return (
    <button className={styles.btn}>
      <div>
        <SvgIcon name='search' />
        <span>{children}</span>
      </div>
    </button>
  )
}

export default Button
