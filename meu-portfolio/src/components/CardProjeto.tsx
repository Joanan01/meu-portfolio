import type { Projeto } from '../types/portfolio'

type CardProjetoProps = {
  projeto: Projeto
}

export function CardProjeto({ projeto }: CardProjetoProps) {
  return (
    <article className="border border-zinc-800 bg-zinc-950 p-4">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-bold text-white">{projeto.titulo}</h3>

        {projeto.emAndamento && (
          <span className="text-xs font-medium text-red-500">
            Em andamento
          </span>
        )}
      </div>

      <p className="mt-2 text-sm text-zinc-400">{projeto.descricao}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {projeto.tecnologias.map((tech) => (
          <span
            key={tech}
            className="bg-zinc-900 px-2 py-0.5 text-xs text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}