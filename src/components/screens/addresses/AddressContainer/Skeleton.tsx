import { FC } from 'react'
import styles from './AddressContainer.module.scss'

const Skeleton: FC = () => {
  const elements = [1, 2, 3, 4, 5, 6]

  return (
    <>
      {elements.map((el) => (
        <div key={el} className={styles.skeleton} />
      ))}
    </>
  )
}

export default Skeleton
