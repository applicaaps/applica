import { mockDocumenti } from "@/lib/auth"
import { FileText, Download, Search } from "lucide-react"

export default function Documenti() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-[var(--color-surface-container-lowest)] rounded-3xl p-8 border border-[var(--color-outline-variant)] ambient-shadow">
        <h1 className="text-3xl font-bold text-[var(--color-deep-teal)] mb-2">Documenti e Risorse</h1>
        <p className="text-base text-[var(--color-on-surface-variant)]">
          Consulta e scarica i materiali clinici, i protocolli e la documentazione amministrativa.
        </p>
      </div>

      <div className="bg-[var(--color-surface-container-lowest)] rounded-3xl p-8 border border-[var(--color-outline-variant)] ambient-shadow">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-outline)]" size={20} />
            <input 
              className="w-full pl-10 pr-4 py-2 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition-shadow text-base" 
              placeholder="Cerca per nome o categoria..." 
              type="text"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
             <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-[var(--color-primary)] text-[var(--color-on-primary)] text-sm font-bold">Tutti</button>
             <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-[var(--color-surface-container-high)] text-[var(--color-on-surface-variant)] text-sm font-bold hover:bg-[var(--color-outline-variant)] transition-colors">Protocolli</button>
             <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-[var(--color-surface-container-high)] text-[var(--color-on-surface-variant)] text-sm font-bold hover:bg-[var(--color-outline-variant)] transition-colors">Materiali</button>
             <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-[var(--color-surface-container-high)] text-[var(--color-on-surface-variant)] text-sm font-bold hover:bg-[var(--color-outline-variant)] transition-colors">Amministrazione</button>
          </div>
        </div>

        <div className="space-y-4">
          {mockDocumenti.map(doc => (
            <div key={doc.id} className="p-4 md:p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-outline-variant)] flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:border-[var(--color-primary)] transition-colors">
              <div className="flex items-start md:items-center gap-4 overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <FileText size={24} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-[var(--color-on-surface)] truncate mb-1 group-hover:text-[var(--color-primary)] transition-colors">{doc.title}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--color-on-surface-variant)]">
                    <span className="font-bold text-[var(--color-deep-teal)]">{doc.category}</span>
                    <span>• {doc.size}</span>
                    <span>• Aggiunto il {doc.dateAdded}</span>
                  </div>
                </div>
              </div>
              <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-2.5 rounded-xl font-bold uppercase text-xs hover:bg-[var(--color-primary)]/5 transition-all shrink-0">
                <Download size={16} />
                Scarica
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
