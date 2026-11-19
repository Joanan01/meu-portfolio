type RodapeProps = {
  nome: string
}

export function Rodape({ nome }: RodapeProps) {
  return (
    <footer className="border-t border-zinc-800 pt-6 text-center text-xs text-zinc-500">
      <p>
        © {new Date().getFullYear()} {nome} — Desenvolvido com React, TypeScript e Tailwind CSS.
      </p>
    </footer>
  )
}