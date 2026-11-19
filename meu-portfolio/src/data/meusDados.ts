import type { Habilidade, Projeto, RedeSocial } from "../types/portfolio";

export const perfil = {
    nome: "Joanan Aquino dos Santos",
    curso: "Análise e Desenvolvimento de Sistemas",
    bio: "Desenvolvedor Júnior focado em automação de processos",
    avatarUrl: "/foto_minha_edit.png",
}

export const redesSociais: RedeSocial[] = [
    {id: 1, nome: "GitHub", url: "https://github.com/Joanan01"},
    {id: 2, nome: "LinkedIn", url: "http://linkedin.com/in/joanan-aquino-7ab68a310/"},
    {id: 3, nome: "E-mail", url: "mailto:joanan.a@outlook.com"}
]

export const habilidades: Habilidade[] = [
    {
        id: 1,
        nome: "TypeScript & JavaScript",
        nivel: "intermediário",
    },

    {
        id: 2,
        nome: "Python",
        nivel: "básico",
    },
    {
        id: 3,
        nome: "Java & POO",
        nivel: "intermediário",
    },

]

export const projetos: Projeto[] = [
    {
        id: 1, 
        titulo: "MotoSeek", 
        descricao: "Plataforma web para busca de peças de motos, verificação de compatibilidade e guias de manutenção.",
        tecnologias: ['Angular', 'TypeScript', 'HTML/CSS'],
        emAndamento: true,
    },

    {
        id: 2,
        titulo: "Calculadora de Rateio de Viagem",
        descricao: "Aplicação interativa para cálculo de quilometragem, consumo de combustível e exportação de relatório em PDF.",
        tecnologias: ['JavaScript', 'HTML', 'CSS'],
        emAndamento: true,
    }
]