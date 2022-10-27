import { FC } from 'react'
import Profile from './Profile/Profile'
import Logo from './Logo/Logo'
import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_sticky}>
        <Logo />
        <Profile />
      </div>
    </header>
  )
}

export default Header
