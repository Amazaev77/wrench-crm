import cn from 'classnames'
import { FC, useState } from 'react'
import Menu from '../Menu'
import { ISubmenuItem } from '../menu-interface'
import SvgIcon, { IconNames } from 'src/components/ui/svg-icon/SvgIcon'
import styles from './Dropdown.module.scss'

interface DropdownProps {
  iconName: IconNames
  title: string
  submenu: ISubmenuItem[]
}

const Dropdown: FC<DropdownProps> = ({ iconName, title, submenu }) => {
  const [opened, setOpened] = useState(false)

  const handleOpen = () => setOpened(!opened)

  return (
    <li
      className={cn(styles.wrapper, { [styles.hide]: !opened })}
      style={{ height: (submenu.length + 1) * 72 + 40 }}
    >
      <div className={styles.dropdown} onClick={handleOpen}>
        <div className={styles.dropdown_icon}>
          <SvgIcon name={iconName} />
        </div>
        <span>{title}</span>
        <div
          className={cn(styles.dropdown_arrow, {
            [styles.open]: opened,
          })}
        >
          <SvgIcon name='arrow' />
        </div>
      </div>
      <div className={cn(styles.dropdown_menu, { [styles.hide]: !opened })}>
        <Menu menu={submenu} />
      </div>
    </li>
  )
}

export default Dropdown
