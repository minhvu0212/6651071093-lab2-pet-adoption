import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import DetailPage from './pages/DetailPage'
import AdoptionPage from './pages/AdoptionPage'
import ListPage from './pages/ListPage'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f6faf7]">
      <Header />
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/item/:id" element={<DetailPage />} />
        <Route path="/dang-ky-nhan-nuoi/:id" element={<AdoptionPage />} />
      </Routes>
      <footer className="border-t border-emerald-100 bg-white px-5 py-7 text-center text-sm text-slate-500">
        © 2026 Mái Ấm Nhỏ · Dự án thực hành thiết kế web · MSSV 6651071093
      </footer>
    </div>
  )
}
