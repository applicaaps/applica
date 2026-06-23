import { Search } from "lucide-react"

export default function LoadingDocumenti() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="bg-white rounded-2xl p-7 border border-[var(--color-outline-variant)] ambient-shadow">
        <div className="h-8 bg-gray-200 rounded-md w-1/4 mb-2"></div>
        <div className="h-4 bg-gray-100 rounded-md w-2/3"></div>
      </div>

      <div className="bg-white rounded-2xl p-7 border border-[var(--color-outline-variant)] ambient-shadow">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="w-full md:w-80 h-10 bg-gray-100 rounded-xl"></div>
          <div className="flex gap-2 w-full md:w-auto">
             <div className="w-16 h-8 bg-gray-200 rounded-lg"></div>
             <div className="w-20 h-8 bg-gray-100 rounded-lg"></div>
             <div className="w-20 h-8 bg-gray-100 rounded-lg"></div>
             <div className="w-24 h-8 bg-gray-100 rounded-lg"></div>
          </div>
        </div>

        <div className="space-y-3">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="p-4 md:p-5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-outline-variant)] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start md:items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-200 shrink-0"></div>
                <div>
                  <div className="w-48 h-4 bg-gray-200 rounded mb-1.5"></div>
                  <div className="w-32 h-3 bg-gray-100 rounded"></div>
                </div>
              </div>
              <div className="w-full md:w-36 h-8 bg-gray-200 rounded-lg shrink-0"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
