import { IconNames } from 'src/components/ui/svg-icon/SvgIcon'

export interface ISubmenuItem {
  link: string
  title: string
  icon: IconNames
}

export interface IMenuItem {
  link: string
  title: string
  icon: IconNames
  submenu?: ISubmenuItem[]
}
