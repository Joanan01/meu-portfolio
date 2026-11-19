import { Cabecalho } from './components/Cabecalho'
import { Painel } from './components/Painel'
import { ListaHabilidades } from './components/ListaHabilidades'
import { CardProjeto } from './components/CardProjeto'
import { Contato } from './components/Contato'
import { Rodape } from './components/Rodape'
import { perfil, redesSociais, habilidades, projetos } from './data/meusDados'

export function App() {
  return (
    <div className="min-h-screen bg-zinc-950 px-4 py-8 text-zinc-100">
      <div className="mx-auto max-w-4xl space-y-6">
        <Cabecalho
          nome={perfil.nome}
          curso={perfil.curso}
          avatarUrl={perfil.avatarUrl}
          links={redesSociais}
        />

        <main className="space-y-6">
          <Painel titulo="Sobre mim">
            <p className="leading-relaxed text-zinc-300">{perfil.bio}</p>
          </Painel>

          <Painel titulo="Habilidades">
            <ListaHabilidades itens={habilidades} />
          </Painel>

          <Painel titulo="Projetos">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {projetos.map((proj) => (
                <CardProjeto key={proj.id} projeto={proj} />
              ))}
            </div>
          </Painel>

          <Painel titulo="Contato">
            <Contato links={redesSociais} />
          </Painel>
        </main>

        <Rodape nome={perfil.nome} />
      </div>
    </div>
  )
}

export default App