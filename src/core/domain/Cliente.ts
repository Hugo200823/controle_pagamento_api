import { EmpresaEntity } from "../infra/entities/Empresa.entity"
import { Empresa, EmpresaProps } from "./Empresa"

export interface ClienteProps {
    cpf: string
    nome: string
    dataVencimento: Date
    valor: number
    isPago: boolean
    empresa: EmpresaProps
    periodo: string
}

export enum PeriodoEnum {
    MATUTINO = 'Matutino',
    VESPERTINO = 'Vespertino'
}

export class Cliente {
    private cpf: string
    private nome: string
    private dataVencimento: Date
    private valor: number
    private isPago: boolean
    private empresa: Empresa
    private periodo: string


    private constructor() {
    }

    public static Criar(props: ClienteProps) {

        const cliente = new Cliente()

        cliente.setCpf(props.cpf)
        cliente.setNome(props.nome)
        cliente.setDataVencimento(props.dataVencimento)
        cliente.setValor(props.valor)
        cliente.setIsPago(props.isPago)

        const empresa = Empresa.Criar({
            nome: props.empresa.nome,
            clientes: props.empresa.clientes
        })
        cliente.setEmpresa(empresa)
        cliente.setPeriodo(props.periodo)

        return cliente
    }

    public virarMes() {
        const novaData = new Date(this.dataVencimento.getFullYear(), this.dataVencimento.getMonth() + 1, this.dataVencimento.getDate())
        const currentDate = new Date()
        if(novaData.getMonth() != currentDate.getMonth()) {
            throw new Error(`Não é possível virar o mês para ${novaData}`)
        }

        this.dataVencimento = novaData
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

    public getPeriodo() {
        return this.periodo
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
        const valorString = valor.toString().replace(',', '.')
        this.valor = Number(valorString.replace(/[^0-9.]/g, ''))
    }

    private setIsPago(isPago: boolean): void {
        this.isPago = isPago ? isPago : false
    }

    private setEmpresa(empresa: Empresa): void {
        if(!empresa) throw new Error(`Empresa é obrigatório: ${empresa}`)
        this.empresa = empresa
    }

    private setPeriodo(periodo: string): void {
        if(!periodo) throw new Error(`Período é obrigatório: ${periodo}`)
        this.periodo = periodo
    }

}