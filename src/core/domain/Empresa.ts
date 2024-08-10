import { Cliente } from "./Cliente"

export interface EmpresaProps {
    nome: string
    clientes?: Cliente[]
}

export class Empresa {
    private nome: string
    private clientes: Cliente[]

    private constructor() {}

    public static Criar(props: EmpresaProps) {
        const empresa = new Empresa()
        empresa.setNome(props.nome)
        empresa.setClientes(props.clientes)
        return empresa
    }

    public getNome() {
        return this.nome
    }

    public getClientes() {
        return this.clientes
    }

    private setNome(nome: string): void {
        if(!nome) throw new Error(`Nome da empresa é obrigatório: ${nome}`)
        this.nome = nome
    }

    private setClientes(clientes: Cliente[]): void {
        this.clientes = clientes
    }
}