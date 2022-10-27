import { FC } from 'react'
import { IMenuItem } from './menu-interface'
import MenuItem from './MenuItem'
import styles from './Menu.module.scss'

interface MenuProps {
  title?: string
  menu: IMenuItem[]
}

const Menu: FC<MenuProps> = ({ title, menu }) => {
  return (
    <div className={styles.menu}>
      {title && <div className={styles.menu_title}>{title}</div>}
      <ul className={styles.menu_list}>
        {menu.map((item) => (
          <MenuItem key={item.link} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default Menu
