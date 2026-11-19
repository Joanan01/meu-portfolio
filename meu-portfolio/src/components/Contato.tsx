import type { RedeSocial } from '../types/portfolio'

type ContatoProps = {
  links: RedeSocial[]
}

export function Contato({ links }: ContatoProps) {
  return (
    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
      <p className="text-sm text-zinc-400">
        Quer conversar sobre projetos ou oportunidades? Entre em contato:
      </p>

      <div className="flex flex-wrap gap-3">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="border border-zinc-700 bg-zinc-950 px-3 py-1.5 text-sm text-zinc-200 transition hover:border-red-600 hover:text-white"
          >
            {link.nome}
          </a>
        ))}
      </div>
    </div>
  )
}