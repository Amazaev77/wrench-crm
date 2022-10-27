import { FC } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Layout from 'src/components/layout/Layout'
import Addresses from 'src/pages/addresses/Addresses'
import Calendar from 'src/pages/calendar/Calendar'
import Finance from 'src/pages/finance/Finance'
import Home from 'src/pages/home/Home'
import Maps from 'src/pages/maps/Maps'
import Profile from 'src/pages/profile/Profile'
import Tables from 'src/pages/tables/Tables'
import Widgets from 'src/pages/widgets/Widgets'

const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='addresses' element={<Addresses />} />
          <Route path='profile' element={<Profile />} />
          <Route path='finance' element={<Finance />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='maps' element={<Maps />} />
          <Route path='tables' element={<Tables />} />
          <Route path='widgets' element={<Widgets />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
