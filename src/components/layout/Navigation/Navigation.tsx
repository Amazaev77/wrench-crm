import { FC } from 'react'
import Logout from './Logout/Logout'
import { menu } from './Menu/menu-data'
import Menu from './Menu/Menu'
import styles from './Navigation.module.scss'

const Navigation: FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_sticky}>
        <div>
          <Menu title='Меню' menu={menu} />
          <Logout />
        </div>
      </div>
    </div>
  )
}

export default Navigation
