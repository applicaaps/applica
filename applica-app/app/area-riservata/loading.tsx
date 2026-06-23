import { CalendarDays, FileText } from "lucide-react"

export default function LoadingDashboard() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Welcome Widget Skeleton */}
      <div className="bg-white rounded-2xl p-7 border border-[var(--color-outline-variant)] ambient-shadow">
        <div className="h-8 bg-gray-200 rounded-md w-1/3 mb-2"></div>
        <div className="h-4 bg-gray-100 rounded-md w-1/2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Eventi Widget Skeleton */}
        <div className="bg-white rounded-2xl p-7 border border-[var(--color-outline-variant)] ambient-shadow">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-base font-bold text-[var(--color-on-surface)] flex items-center gap-2">
              <CalendarDays size={18} className="text-[var(--color-primary)] opacity-50" />
              Prossimi eventi
            </h2>
            <div className="w-16 h-4 bg-gray-200 rounded"></div>
          </div>
          
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-outline-variant)]">
                <div className="flex justify-between items-start mb-1.5">
                  <div className="w-16 h-3 bg-gray-200 rounded"></div>
                  <div className="w-20 h-3 bg-gray-100 rounded"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-1"></div>
                <div className="h-3 bg-gray-100 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Documenti Widget Skeleton */}
        <div className="bg-white rounded-2xl p-7 border border-[var(--color-outline-variant)] ambient-shadow">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-base font-bold text-[var(--color-on-surface)] flex items-center gap-2">
              <FileText size={18} className="text-[var(--color-primary)] opacity-50" />
              Documenti recenti
            </h2>
            <div className="w-16 h-4 bg-gray-200 rounded"></div>
          </div>
          
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-outline-variant)] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-200 shrink-0"></div>
                  <div>
                    <div className="w-32 h-4 bg-gray-200 rounded mb-1"></div>
                    <div className="w-24 h-3 bg-gray-100 rounded"></div>
                  </div>
                </div>
                <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
