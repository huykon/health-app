import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopPage from './components/TopPage'
import MyRecordPage from './components/MyRecordPage'
import ColumnPage from './components/ColumnPage'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TopPage />} />
          <Route path="/my-record" element={<MyRecordPage />} />
          <Route path="/column-page" element={<ColumnPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
