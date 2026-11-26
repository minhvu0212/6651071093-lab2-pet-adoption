import { Link, useParams } from 'react-router-dom'
import { pets } from '../data/pets'
import { formatCurrency } from '../utils'

export default function DetailPage() {
  const { id } = useParams()
  const pet = pets.find((item) => item.id === Number(id))

  if (!pet) {
    return <main className="page-enter mx-auto max-w-4xl px-5 py-20 text-center"><h1 className="text-2xl font-extrabold">Không tìm thấy hồ sơ thú cưng</h1><Link to="/" className="mt-5 inline-block font-bold text-emerald-700">← Quay lại danh sách</Link></main>
  }

  return (
    <main className="page-enter mx-auto max-w-5xl px-5 py-10">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-900">← Quay lại danh sách</Link>
      <div className="mt-6 grid overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-sm md:grid-cols-2">
        <div className="min-h-[340px] overflow-hidden" style={{ backgroundColor: pet.color }}>
          <img src={pet.imageUrl} alt={`${pet.type} ${pet.breed} tên ${pet.name}`} className="h-full min-h-[340px] w-full object-cover" />
        </div>
        <div className="p-7 md:p-10">
          <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-800">{pet.status}</span>
          <h1 className="mt-5 font-['Manrope'] text-4xl font-extrabold text-slate-900">{pet.name}</h1>
          <p className="mt-2 text-slate-500">{pet.breed} · {pet.type}</p>
          <p className="mt-6 leading-7 text-slate-600">{pet.description}</p>
          <dl className="mt-7 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-slate-50 p-4"><dt className="text-xs text-slate-500">Độ tuổi</dt><dd className="mt-1 font-bold">{pet.age}</dd></div>
            <div className="rounded-2xl bg-slate-50 p-4"><dt className="text-xs text-slate-500">Giới tính</dt><dd className="mt-1 font-bold">{pet.gender}</dd></div>
            <div className="rounded-2xl bg-slate-50 p-4"><dt className="text-xs text-slate-500">Phí hỗ trợ</dt><dd className="mt-1 font-bold text-emerald-700">{pet.fee === 0 ? 'Miễn phí' : formatCurrency(pet.fee)}</dd></div>
            <div className="rounded-2xl bg-slate-50 p-4"><dt className="text-xs text-slate-500">Ngày đăng</dt><dd className="mt-1 font-bold">{new Date(`${pet.postedDate}T00:00:00`).toLocaleDateString('vi-VN')}</dd></div>
          </dl>
          <div className="mt-7 rounded-2xl bg-emerald-50 p-4">
            <p className="text-sm font-bold text-emerald-900">Bạn muốn tìm hiểu về {pet.name}?</p>
            <p className="mt-1 text-sm leading-6 text-emerald-800">Hãy liên hệ trung tâm cứu hộ hoặc người phụ trách hồ sơ để được tư vấn quy trình nhận nuôi và xác minh điều kiện chăm sóc.</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to={`/dang-ky-nhan-nuoi/${pet.id}`} className="inline-flex rounded-full bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700">Đăng ký nhận nuôi {pet.name}</Link>
            <Link to="/" className="inline-flex rounded-full border border-emerald-200 px-6 py-3 font-bold text-emerald-700 transition hover:bg-emerald-50">Khám phá thêm các bé</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
