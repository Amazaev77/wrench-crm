import { FC } from 'react'
import SvgIcon from 'src/components/ui/svg-icon/SvgIcon'
import styles from './Logout.module.scss'

const Logout: FC = () => {
  return (
    <div className={styles.logout}>
      <div className={styles.logout_icon}>
        <SvgIcon name='logout' />
      </div>
      <div className={styles.logout_text}>Выход</div>
    </div>
  )
}

export default Logout
