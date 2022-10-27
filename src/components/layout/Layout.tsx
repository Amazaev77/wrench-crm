import { FC } from 'react'
import Main from 'src/components/layout/Main/Main'
import Navigation from 'src/components/layout/Navigation/Navigation'
import Header from './Header/Header'
import styles from './Layout.module.scss'

const Layout: FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Navigation />
        <Main />
      </div>
    </div>
  )
}

export default Layout
