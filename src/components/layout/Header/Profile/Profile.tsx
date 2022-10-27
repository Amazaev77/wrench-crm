import { FC } from 'react'
import { Link } from 'react-router-dom'
import SvgIcon from 'src/components/ui/svg-icon/SvgIcon'
import styles from './Profile.module.scss'

const Profile: FC = () => {
  return (
    <Link to='/profile' className={styles.profile}>
      <div className={styles.profile_icon}>
        <SvgIcon name='profile' />
      </div>
      <div className={styles.profile_name}>Асхаб Амазаев</div>
    </Link>
  )
}

export default Profile
