import { FC } from 'react'

import * as icons from './svgIcons'

export type IconNames =
  | 'logo'
  | 'home'
  | 'search'
  | 'table'
  | 'calendar'
  | 'map'
  | 'widget'
  | 'setting'
  | 'profile'
  | 'finance'
  | 'logout'
  | 'arrow'

const SvgIcon: FC<{ name: IconNames }> = ({ name }) => {
  return icons[name]
}

export default SvgIcon
