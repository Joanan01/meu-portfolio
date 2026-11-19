import type { ReactNode } from 'react'

type PainelProps = {
  titulo: string
  children: ReactNode
}

export function Painel({ titulo, children }: PainelProps) {
  return (
    <section className="border border-zinc-800 bg-zinc-900 p-6 shadow-md">
      <h2 className="mb-4 border-l-4 border-red-600 pl-3 text-xl font-bold text-white">
        {titulo}
      </h2>
      {children}
    </section>
  )
}