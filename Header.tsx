import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-emerald-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-3" aria-label="Mái Ấm Nhỏ - Trang chủ">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-600 text-2xl text-white">♥</span>
          <span>
            <span className="block font-['Manrope'] text-xl font-extrabold tracking-tight text-emerald-900">Mái Ấm Nhỏ</span>
            <span className="block text-xs font-medium text-slate-500">Một mái nhà, một yêu thương</span>
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-semibold">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-emerald-700' : 'text-slate-600 hover:text-emerald-700'}>Thú cưng</NavLink>
          <a href="#about" className="hidden text-slate-600 hover:text-emerald-700 sm:block">Về chúng tôi</a>
          <Link to="/" className="rounded-full bg-emerald-600 px-4 py-2.5 text-white shadow-sm transition hover:bg-emerald-700">Tìm bạn mới</Link>
        </nav>
      </div>
    </header>
  )
}
