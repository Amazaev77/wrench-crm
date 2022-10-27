import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import Dropdown from './Dropdown/Dropdown'
import SvgIcon from 'src/components/ui/svg-icon/SvgIcon'
import { IMenuItem } from './menu-interface'
import styles from './Menu.module.scss'

interface MenuItemProps {
  item: IMenuItem
}

const MenuItem: FC<MenuItemProps> = ({ item }) => {
  if (item?.submenu?.length) {
    return (
      <Dropdown submenu={item.submenu} title={item.title} iconName={item.icon} />
    )
  }

  return (
    <li className={styles.item}>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.item_link_active : styles.item_link
        }
        to={item.link}
        end
      >
        <div className={styles.item_icon}>
          <SvgIcon name={item.icon} />
        </div>
        <span>{item.title}</span>
      </NavLink>
    </li>
  )
}

export default MenuItem
