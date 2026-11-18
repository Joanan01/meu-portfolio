export type NivelHabilidades = "básico" | "intermediário" | "avançado"

export type Habilidade = {
    id: number;
    nome: String;
    nivel: NivelHabilidades;
}

export type Projeto = {
    id: number;
    titulo: String;
    descricao: String;
    tecnologias: String[];
}

export type RedeSocial = {
    id: number;
    nome: string;
    url: string;
}