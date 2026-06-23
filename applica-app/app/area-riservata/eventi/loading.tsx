import { Calendar, MapPin, Clock } from "lucide-react"

export default function LoadingEventi() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="bg-white rounded-2xl p-7 border border-[var(--color-outline-variant)] ambient-shadow">
        <div className="h-8 bg-gray-200 rounded-md w-1/4 mb-2"></div>
        <div className="h-4 bg-gray-100 rounded-md w-2/3"></div>
      </div>

      <div>
        <div className="h-6 bg-gray-200 rounded w-40 mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-[var(--color-outline-variant)] ambient-shadow flex flex-col h-full">
              <div className="mb-4">
                <div className="w-20 h-5 bg-gray-200 rounded-md mb-3"></div>
                <div className="w-3/4 h-6 bg-gray-200 rounded mb-2"></div>
                <div className="w-full h-4 bg-gray-100 rounded mb-1"></div>
                <div className="w-5/6 h-4 bg-gray-100 rounded"></div>
              </div>
              
              <div className="space-y-2.5 mt-auto mb-5">
                <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-200 rounded"></div><div className="w-24 h-4 bg-gray-100 rounded"></div></div>
                <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-200 rounded"></div><div className="w-32 h-4 bg-gray-100 rounded"></div></div>
                <div className="flex items-center gap-2"><div className="w-4 h-4 bg-gray-200 rounded"></div><div className="w-20 h-4 bg-gray-100 rounded"></div></div>
              </div>

              <div className="w-full h-10 bg-gray-200 rounded-xl mt-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
