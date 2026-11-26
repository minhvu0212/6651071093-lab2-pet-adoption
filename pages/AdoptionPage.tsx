import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { pets } from '../data/pets'

interface AdoptionApplication {
  id: string
  petId: number
  petName: string
  fullName: string
  phone: string
  email: string
  address: string
  reason: string
  createdAt: string
}

export default function AdoptionPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const pet = pets.find((item) => item.id === Number(id))
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [reason, setReason] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (!pet) {
    return (
      <main className="mx-auto max-w-3xl px-5 py-20 text-center">
        <h1 className="text-2xl font-extrabold text-slate-900">Không tìm thấy thú cưng</h1>
        <Link to="/" className="mt-5 inline-block font-bold text-emerald-700">← Quay lại danh sách</Link>
      </main>
    )
  }
  const petId = pet.id
const petName = pet.name

  if (submitted) {
    return (
      <main className="page-enter mx-auto max-w-2xl px-5 py-16">
        <section className="rounded-3xl border border-emerald-100 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-700">✓</div>
          <h1 className="mt-5 font-['Manrope'] text-3xl font-extrabold text-slate-900">Đã lưu đăng ký!</h1>
          <p className="mt-3 leading-7 text-slate-600">Thông tin đăng ký nhận nuôi bé <strong>{pet.name}</strong> đã được lưu trên trình duyệt này. Đây là bản demo, chưa gửi dữ liệu đến trung tâm cứu hộ.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to={`/item/${pet.id}`} className="rounded-full border border-emerald-200 px-5 py-3 font-bold text-emerald-700">Quay lại hồ sơ</Link>
            <Link to="/" className="rounded-full bg-emerald-600 px-5 py-3 font-bold text-white">Về trang chủ</Link>
          </div>
        </section>
      </main>
    )
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const normalizedPhone = phone.replace(/[^\d+]/g, '')
    if (!/^(0|\+84)\d{9,10}$/.test(normalizedPhone)) {
      setError('Số điện thoại chưa đúng định dạng. Vui lòng nhập số điện thoại Việt Nam.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Vui lòng nhập địa chỉ email hợp lệ.')
      return
    }
    const application: AdoptionApplication = {
  id: `${Date.now()}`,
  petId: petId,
  petName: petName,
      fullName: fullName.trim(),
      phone: normalizedPhone,
      email: email.trim(),
      address: address.trim(),
      reason: reason.trim(),
      createdAt: new Date().toISOString()
    }
    try {
      const saved = localStorage.getItem('mai-am-nho-adoption-applications')
      const applications: AdoptionApplication[] = saved ? JSON.parse(saved) as AdoptionApplication[] : []
      applications.push(application)
      localStorage.setItem('mai-am-nho-adoption-applications', JSON.stringify(applications))
      setError('')
      setSubmitted(true)
    } catch {
      setError('Không thể lưu đăng ký trên trình duyệt. Vui lòng kiểm tra bộ nhớ trình duyệt và thử lại.')
    }
  }

  return (
    <main className="page-enter mx-auto max-w-5xl px-5 py-10">
      <Link to={`/item/${pet.id}`} className="inline-flex text-sm font-bold text-emerald-700 hover:text-emerald-900">← Quay lại hồ sơ {pet.name}</Link>
      <div className="mt-6 grid overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-sm md:grid-cols-[.8fr_1.2fr]">
        <aside className="bg-emerald-700 p-7 text-white md:p-9">
          <img src={pet.imageUrl} alt={`${pet.type} tên ${pet.name}`} className="h-56 w-full rounded-2xl object-cover" />
          <p className="mt-6 text-sm font-semibold text-emerald-100">Bạn đang đăng ký nhận nuôi</p>
          <h1 className="mt-2 font-['Manrope'] text-3xl font-extrabold">{pet.name}</h1>
          <p className="mt-2 text-emerald-50">{pet.breed} · {pet.age} · {pet.gender}</p>
          <p className="mt-5 text-sm leading-6 text-emerald-50">Hãy cung cấp thông tin chính xác để người phụ trách có thể liên hệ và trao đổi về điều kiện chăm sóc bé.</p>
        </aside>
        <section className="p-6 md:p-9">
          <p className="text-sm font-bold text-emerald-700">MÁI ẤM NHỎ</p>
          <h2 className="mt-2 font-['Manrope'] text-2xl font-extrabold text-slate-900">Đơn đăng ký nhận nuôi</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">Vui lòng điền đầy đủ các thông tin bên dưới.</p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <label className="block text-sm font-semibold text-slate-700">Họ và tên *
              <input required minLength={2} maxLength={80} value={fullName} onChange={(event) => setFullName(event.target.value)} placeholder="Nhập họ và tên" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-500" />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-slate-700">Số điện thoại *
                <input required value={phone} onChange={(event) => setPhone(event.target.value)} inputMode="tel" placeholder="Ví dụ: 0912345678" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-500" />
              </label>
              <label className="block text-sm font-semibold text-slate-700">Email *
                <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="example@email.com" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-500" />
              </label>
            </div>
            <label className="block text-sm font-semibold text-slate-700">Địa chỉ *
              <input required minLength={5} maxLength={160} value={address} onChange={(event) => setAddress(event.target.value)} placeholder="Số nhà, đường, quận/huyện, tỉnh/thành" className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-500" />
            </label>
            <label className="block text-sm font-semibold text-slate-700">Lý do muốn nhận nuôi *
              <textarea required minLength={10} maxLength={1000} rows={4} value={reason} onChange={(event) => setReason(event.target.value)} placeholder="Chia sẻ lý do và điều kiện chăm sóc mà bạn có thể dành cho bé..." className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-emerald-500" />
            </label>
            {error && <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>}
            <p className="text-xs leading-5 text-slate-500">* Thông tin được lưu trong localStorage của trình duyệt để minh họa chức năng. Website demo chưa có máy chủ gửi hồ sơ thật.</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button type="submit" className="rounded-full bg-emerald-600 px-6 py-3 font-bold text-white transition hover:bg-emerald-700">Gửi đăng ký</button>
              <button type="button" onClick={() => navigate(`/item/${pet.id}`)} className="rounded-full border border-slate-200 px-6 py-3 font-bold text-slate-600 transition hover:bg-slate-50">Hủy</button>
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}
