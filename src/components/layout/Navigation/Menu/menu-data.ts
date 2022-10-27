import { IMenuItem, ISubmenuItem } from './menu-interface'

const settingSubmenu: ISubmenuItem[] = [
  { link: '/profile', title: 'Настройка профиля', icon: 'profile' },
  { link: '/finance', title: 'Управление финансами', icon: 'finance' },
]

export const menu: IMenuItem[] = [
  { link: '/', title: 'Главная', icon: 'home' },
  { link: '/addresses', title: 'Поиск адресов', icon: 'search' },
  { link: '/tables', title: 'Таблицы', icon: 'table' },
  { link: '/calendar', title: 'Календарь', icon: 'calendar' },
  { link: '/maps', title: 'Карты', icon: 'map' },
  { link: '/widgets', title: 'Виджеты', icon: 'widget' },
  {
    link: '/settings',
    title: 'Настройки',
    icon: 'setting',
    submenu: settingSubmenu,
  },
]
