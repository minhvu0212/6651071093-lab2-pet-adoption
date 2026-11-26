import { useMemo, useState } from 'react'
import PetCard from '../components/PetCard'
import Stats from '../components/Stats'
import { pets } from '../data/pets'

export default function ListPage() {
  const [type, setType] = useState('Tất cả')
  const [maxFee, setMaxFee] = useState('3000000')
  const [fromDate, setFromDate] = useState('2026-10-01')
  const [toDate, setToDate] = useState('2026-11-30')

  const filteredPets = useMemo(() => pets.filter((pet) => {
    const matchesType = type === 'Tất cả' || pet.type === type
    const matchesFee = pet.fee <= Number(maxFee)
    const matchesDate = pet.postedDate >= fromDate && pet.postedDate <= toDate
    return matchesType && matchesFee && matchesDate && pet.status === 'Đang tìm nhà'
  }), [type, maxFee, fromDate, toDate])

  return (
    <main className="page-enter mx-auto max-w-7xl px-5 pb-16 pt-8">
      <section className="relative overflow-hidden rounded-[2rem] bg-emerald-700 px-7 py-10 text-white md:px-12 md:py-14">
        <div className="absolute -right-12 -top-16 h-64 w-64 rounded-full bg-emerald-500/40" />
        <div className="absolute -bottom-24 right-44 h-52 w-52 rounded-full bg-emerald-500/30" />
        <div className="relative max-w-2xl">
          <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[.18em]">Nhận nuôi · Trao yêu thương</span>
          <h1 className="mt-6 font-['Manrope'] text-4xl font-extrabold leading-tight md:text-5xl">Một người bạn nhỏ,<br />một tình yêu thật lớn.</h1>
          <p className="mt-4 max-w-xl text-sm leading-7 text-emerald-50 md:text-base">Mỗi bé thú cưng đều xứng đáng có một mái nhà an toàn. Hãy tìm người bạn đồng hành đang chờ bạn tại Mái Ấm Nhỏ.</p>
          <a href="#pets" className="mt-7 inline-flex rounded-full bg-white px-6 py-3 font-bold text-emerald-800 transition hover:bg-emerald-50">Khám phá các bé <span className="ml-2" aria-hidden="true">→</span></a>
        </div>
        <div className="absolute bottom-4 right-10 hidden text-[8rem] opacity-20 lg:block" aria-hidden="true">🐕</div>
      </section>

      <div className="mt-7 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
        <Stats pets={pets} />
        <section className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm">
          <p className="text-sm font-bold text-emerald-700">Bắt đầu hành trình</p>
          <h2 className="mt-1 font-['Manrope'] text-xl font-extrabold text-slate-900">Nhận nuôi có trách nhiệm</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">Hãy cân nhắc thời gian, điều kiện chăm sóc và sự đồng hành lâu dài trước khi đón một thành viên mới về nhà.</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-emerald-800">
            <span className="rounded-full bg-emerald-50 px-3 py-2">♥ Yêu thương</span>
            <span className="rounded-full bg-emerald-50 px-3 py-2">⌂ An toàn</span>
            <span className="rounded-full bg-emerald-50 px-3 py-2">✦ Trách nhiệm</span>
          </div>
        </section>
      </div>

      <section id="pets" className="mt-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-bold text-emerald-700">Những người bạn đáng yêu</p>
            <h2 className="mt-1 font-['Manrope'] text-3xl font-extrabold text-slate-900">Tìm bạn đồng hành</h2>
          </div>
          <p className="text-sm text-slate-500">Hiển thị {filteredPets.length}/{pets.length} bé</p>
        </div>

        <div className="mt-6 grid gap-4 rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          <label className="text-sm font-semibold text-slate-700">Loài thú cưng
            <select value={type} onChange={(event) => setType(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
              <option>Tất cả</option><option>Chó</option><option>Mèo</option><option>Thỏ</option>
            </select>
          </label>
          <label className="text-sm font-semibold text-slate-700">Phí hỗ trợ tối đa
            <select value={maxFee} onChange={(event) => setMaxFee(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
              <option value="300000">300.000 ₫</option><option value="500000">500.000 ₫</option><option value="1000000">1.000.000 ₫</option><option value="2000000">2.000.000 ₫</option><option value="3000000">3.000.000 ₫</option>
            </select>
          </label>
          <label className="text-sm font-semibold text-slate-700">Đăng từ ngày
            <input type="date" value={fromDate} onChange={(event) => setFromDate(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3" />
          </label>
          <label className="text-sm font-semibold text-slate-700">Đến ngày
            <input type="date" value={toDate} onChange={(event) => setToDate(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3" />
          </label>
          <button type="button" onClick={() => { setType('Tất cả'); setMaxFee('3000000'); setFromDate('2026-10-01'); setToDate('2026-11-30') }} className="rounded-xl border border-emerald-200 px-4 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-50 sm:col-span-2 lg:col-span-4">Xóa bộ lọc</button>
        </div>

        {filteredPets.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredPets.map((pet) => <PetCard key={pet.id} pet={pet} />)}
          </div>
        ) : (
          <div className="mt-6 rounded-3xl border border-dashed border-emerald-200 bg-white p-12 text-center">
            <span className="text-5xl" aria-hidden="true">🐾</span>
            <h3 className="mt-3 font-bold text-slate-800">Chưa tìm thấy bé phù hợp</h3>
            <p className="mt-1 text-sm text-slate-500">Bạn hãy thử thay đổi điều kiện lọc nhé.</p>
          </div>
        )}
      </section>
      <section id="about" className="mt-14 rounded-3xl bg-emerald-50 p-7 text-center">
        <h2 className="font-['Manrope'] text-2xl font-extrabold text-emerald-900">Nhận nuôi là một cam kết yêu thương</h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-emerald-800">Mái Ấm Nhỏ mong muốn kết nối những người sẵn sàng chăm sóc lâu dài với các bé đang cần một gia đình.</p>
      </section>
    </main>
  )
}
