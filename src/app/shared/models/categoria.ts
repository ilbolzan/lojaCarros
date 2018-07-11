export interface ICategoria {
    id: number;
    descricao: string;
    nome: string;
}

export class Categoria implements ICategoria {
    public id: number;
    public descricao: string;
    public nome: string;

    constructor(
        public categoria: ICategoria
    ) {
        this.id = categoria.id;
        this.descricao = categoria.descricao;
        this.nome = categoria.nome;
    }
}
