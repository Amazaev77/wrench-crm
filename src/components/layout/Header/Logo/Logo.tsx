import { FC } from 'react'
import { Link } from 'react-router-dom'
import SvgIcon from 'src/components/ui/svg-icon/SvgIcon'
import styles from './Logo.module.scss'

const Logo: FC = () => {
  return (
    <Link to='/' className={styles.logo}>
      <div className={styles.logo_icon}>
        <SvgIcon name='logo' />
      </div>
      <div className={styles.logo_text}>Wrench CRM</div>
    </Link>
  )
}

export default Logo
