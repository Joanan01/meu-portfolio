import type { RedeSocial } from "../types/portfolio";

type CabecalhoProps = {
    nome: string;
    curso: string;
    avatarUrl: string;
    links: RedeSocial[];
}

export function Cabecalho({ nome, curso, avatarUrl, links }: CabecalhoProps){
    return (
        <header className="w-full bg-zinc-900 p-8 text-white shadow-lg sm:p-10">
      <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="space-y-3 text-center sm:text-left">
          <h1 className="font-mono text-3xl font-bold tracking-tight text-white sm:text-5xl">
            print(<span className="text-red-600">"Hello World!"</span>)
          </h1>

          <div>
            <p className="text-xl font-semibold text-zinc-100">{nome}</p>
            <p className="text-sm text-zinc-400">{curso}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-3 pt-2 sm:justify-start">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-zinc-800 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:bg-red-600 hover:text-white"
              >
                {link.nome}
              </a>
            ))}
          </nav>
        </div>

        <img
          src={avatarUrl}
          alt={`Foto de perfil de ${nome}`}
          className="size-40 shrink-0 rounded-full border-4 border-red-600 object-cover shadow-md sm:size-52"
        />
      </div>
    </header>
    )
}