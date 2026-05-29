import { mockDocumenti } from "@/lib/auth"
import { FileText, Download, Search } from "lucide-react"

export default function Documenti() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-7 border border-[var(--color-outline-variant)] ambient-shadow">
        <h1 className="text-2xl font-bold text-[var(--color-on-surface)] mb-1">Documenti e Risorse</h1>
        <p className="text-sm text-[var(--color-on-surface-variant)]">
          Consulta e scarica materiali clinici, protocolli e documentazione amministrativa.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-7 border border-[var(--color-outline-variant)] ambient-shadow">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-outline)]" size={18} />
            <input 
              className="w-full pl-10 pr-4 py-2.5 bg-[var(--color-surface)] border border-[var(--color-outline-variant)] rounded-xl outline-none text-sm text-[var(--color-on-surface)]" 
              placeholder="Cerca per nome o categoria…" 
              type="text"
            />
          </div>
          <div className="flex gap-1.5 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
             <button className="whitespace-nowrap px-3.5 py-1.5 rounded-lg bg-[var(--color-primary)] text-[var(--color-on-primary)] text-xs font-semibold pressable">Tutti</button>
             <button className="whitespace-nowrap px-3.5 py-1.5 rounded-lg bg-[var(--color-surface-container-high)] text-[var(--color-on-surface-variant)] text-xs font-semibold hover:bg-[var(--color-outline-variant)] transition-colors duration-200 pressable">Protocolli</button>
             <button className="whitespace-nowrap px-3.5 py-1.5 rounded-lg bg-[var(--color-surface-container-high)] text-[var(--color-on-surface-variant)] text-xs font-semibold hover:bg-[var(--color-outline-variant)] transition-colors duration-200 pressable">Materiali</button>
             <button className="whitespace-nowrap px-3.5 py-1.5 rounded-lg bg-[var(--color-surface-container-high)] text-[var(--color-on-surface-variant)] text-xs font-semibold hover:bg-[var(--color-outline-variant)] transition-colors duration-200 pressable">Amministrazione</button>
          </div>
        </div>

        <div className="space-y-3">
          {mockDocumenti.map(doc => (
            <div key={doc.id} className="p-4 md:p-5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-outline-variant)] flex flex-col md:flex-row md:items-center justify-between gap-4 group interactive-card">
              <div className="flex items-start md:items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/8 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <FileText size={20} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-[var(--color-on-surface)] truncate mb-0.5 group-hover:text-[var(--color-primary)] transition-colors duration-200">{doc.title}</h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-[var(--color-on-surface-variant)]">
                    <span className="font-semibold text-[var(--color-primary)]">{doc.category}</span>
                    <span>{doc.size}</span>
                    <span>Aggiunto il {doc.dateAdded}</span>
                  </div>
                </div>
              </div>
              <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-transparent border border-[var(--color-outline-variant)] text-[var(--color-on-surface)] px-4 py-2 rounded-lg font-medium text-xs hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors duration-200 shrink-0 pressable">
                <Download size={14} />
                Scarica documento
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
