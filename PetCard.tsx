import { Link } from 'react-router-dom'
import type { Pet } from '../types'
import { formatCurrency } from '../utils'

interface PetCardProps { pet: Pet }

export default function PetCard({ pet }: PetCardProps) {
  return (
    <article className="pet-card overflow-hidden rounded-3xl border border-emerald-50 bg-white shadow-sm">
      <div className="relative h-48 overflow-hidden" style={{ backgroundColor: pet.color }}>
        <img src={pet.imageUrl} alt={`${pet.type} ${pet.breed} tên ${pet.name}`} className="h-full w-full object-cover" loading="lazy" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-emerald-800">{pet.type}</span>
        <span className="absolute right-4 top-4 rounded-full bg-emerald-700 px-3 py-1 text-xs font-bold text-white">{pet.status}</span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-['Manrope'] text-xl font-extrabold text-slate-900">{pet.name}</h3>
            <p className="mt-1 text-sm text-slate-500">{pet.breed} · {pet.age}</p>
          </div>
          <span className="rounded-xl bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-700">{pet.gender}</span>
        </div>
        <p className="mt-4 flex items-center gap-2 text-sm text-slate-500"><span aria-hidden="true">⌖</span>{pet.location}</p>
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <div>
            <p className="text-xs text-slate-400">Phí hỗ trợ</p>
            <p className="font-extrabold text-emerald-700">{pet.fee === 0 ? 'Miễn phí' : formatCurrency(pet.fee)}</p>
          </div>
          <Link to={`/item/${pet.id}`} className="rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-emerald-700">Xem hồ sơ</Link>
        </div>
      </div>
    </article>
  )
}
