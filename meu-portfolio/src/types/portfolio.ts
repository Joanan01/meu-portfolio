export type NivelHabilidades = "básico" | "intermediário" | "avançado"

export type Habilidade = {
    id: number;
    nome: string;
    nivel: NivelHabilidades;
}

export type Projeto = {
    id: number;
    titulo: string;
    descricao: string;
    tecnologias: string[];
    emAndamento?: boolean;
    repoUrl?: string;
}

export type RedeSocial = {
    id: number;
    nome: string;
    url: string;
}