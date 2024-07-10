import { Empresa } from "./Empresa"

export interface ClienteProps {
    cpf: string
    nome: string
    dataVencimento: Date
    valor: number
    isPago: boolean
    empresa: Empresa
}

export class Cliente {
    private cpf: string
    private nome: string
    private dataVencimento: Date
    private valor: number
    private isPago: boolean
    private empresa: Empresa


    private constructor() {
    }

    public static Criar(props: ClienteProps) {

        const cliente = new Cliente()

        cliente.setCpf(props.cpf)
        cliente.setNome(props.nome)
        cliente.setDataVencimento(props.dataVencimento)
        cliente.setValor(props.valor)
        cliente.setIsPago(props.isPago)
        cliente.setEmpresa(props.empresa)

        return cliente
    }

    public getCpf() {
        return this.cpf
    }

    public getNome() {
        return this.nome
    }

    public getDataVencimento() {
        return this.dataVencimento
    }

    public getValor() {
        return this.valor
    }

    public getIsPago() {
        return this.isPago
    }

    public getEmpresa() {
        return this.empresa
    }

    private setCpf(cpf: string): void {
        this.cpf = cpf
    }

    private setNome(nome: string): void {
        if(!nome) throw new Error(`Nome é obrigatório: ${nome}`)
        this.nome = nome
    }

    private setDataVencimento(dataVencimento: Date): void {
        if(!dataVencimento) throw new Error(`Data vencimento é obrigatório: ${dataVencimento}`)
        this.dataVencimento = dataVencimento
    }

    private setValor(valor: number): void {
        if(!valor) throw new Error(`Valor é obrigatório: ${valor}`)
        this.valor = valor
    }

    private setIsPago(isPago: boolean): void {
        this.isPago = isPago ? isPago : false
    }

    private setEmpresa(empresa: Empresa): void {
        if(!empresa) throw new Error(`Empresa é obrigatório: ${empresa}`)
        this.empresa = empresa
    }

}