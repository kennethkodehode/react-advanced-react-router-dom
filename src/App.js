import { Routes, Route } from 'react-router-dom'

import SiteNav from './sections/SiteNav'
import Home from './pages/Home'
import RedRealm from './pages/Red'
import GreenRealm from './pages/Green'
import BlueRealm from './pages/Blue'

export default function App() {
  return (
    <div className="App">
      <SiteNav />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/red" element={<RedRealm />} />
        <Route path="/green" element={<GreenRealm />} />
        <Route path="/blue" element={<BlueRealm />} />
      </Routes>
    </div>
  )
}
