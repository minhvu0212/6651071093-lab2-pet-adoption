import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import type { Pet } from '../types'

interface StatsProps { pets: Pet[] }

const COLORS = ['#059669', '#F59E0B', '#60A5FA']

export default function Stats({ pets }: StatsProps) {
  const data = [
    { name: 'Chó', value: pets.filter((pet) => pet.type === 'Chó').length },
    { name: 'Mèo', value: pets.filter((pet) => pet.type === 'Mèo').length },
    { name: 'Thỏ', value: pets.filter((pet) => pet.type === 'Thỏ').length },
  ]
  return (
    <section className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm" aria-label="Thống kê thú cưng">
      <div className="mb-3">
        <p className="text-sm font-bold text-emerald-700">Thống kê cộng đồng</p>
        <h2 className="font-['Manrope'] text-xl font-extrabold text-slate-900">Các bé đang chờ nhà</h2>
      </div>
      <div className="grid items-center gap-2 sm:grid-cols-[1fr_1.2fr]">
        <div className="h-40 min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" innerRadius={42} outerRadius={68} paddingAngle={4}>
                {data.map((entry, index) => <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="space-y-3">
          {data.map((entry, index) => (
            <div key={entry.name} className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-slate-600"><span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: COLORS[index] }} />{entry.name}</span>
              <strong className="text-slate-900">{entry.value} bé</strong>
            </div>
          ))}
          <p className="border-t border-slate-100 pt-2 text-xs text-slate-500">Tổng cộng {pets.length} hồ sơ thú cưng</p>
        </div>
      </div>
    </section>
  )
}
