import type { Habilidade, NivelHabilidades } from '../types/portfolio'

type ListaHabilidadesProps = {
  itens: Habilidade[]
}

const ESTILO_NIVEL: Record<NivelHabilidades, string> = {
  básico: 'border-zinc-600 bg-zinc-800 text-zinc-300',
  intermediário: 'border-amber-600/50 bg-amber-950/60 text-amber-300',
  avançado: 'border-red-600/60 bg-red-950/70 text-red-400',
}

export function ListaHabilidades({ itens }: ListaHabilidadesProps) {
  return (
    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {itens.map((hab) => (
        <li
          key={hab.id}
          className="flex items-center justify-between border border-zinc-800 bg-zinc-950/60 p-3.5"
        >
          <span className="font-medium text-zinc-100">{hab.nome}</span>
          <span
            className={`border px-2.5 py-0.5 text-xs font-semibold uppercase ${ESTILO_NIVEL[hab.nivel]}`}
          >
            {hab.nivel}
          </span>
        </li>
      ))}
    </ul>
  )
}