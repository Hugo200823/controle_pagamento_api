import { Empresa } from "src/core/domain/Empresa";
import { BaseEntity, Column, Entity, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { EmpresaEntity } from "./Empresa.entity";

export interface ClienteProps {
    cpf: string
    nome: string
    dataVencimento: Date
    valor: number
    isPago: boolean
    empresa: Empresa
}


@Entity('cliente')
export class ClienteEntity extends BaseEntity {

    @PrimaryColumn('varchar', { primaryKeyConstraintName: 'cliente_pk', name: 'nome' })
    nome: string

    @Column({name: 'cpf', nullable: true, type: "varchar"})
    cpf: string

    @Column({name: 'dataVencimento', type: 'timestamp'})
    dataVencimento: Date

    @Column({name: 'valor', type: 'numeric'})
    valor: number

    @Column({name: 'isPago', type: 'boolean', default: 'false'})
    isPago: boolean

    @ManyToOne(() => EmpresaEntity, (empresa) => empresa.clientes)
    empresa: Empresa

    public setProps(props: ClienteProps) {
        this.cpf = props.cpf
        this.nome = props.nome
        this.dataVencimento = props.dataVencimento
        this.valor = props.valor
        this.isPago = props.isPago
        this.empresa = props.empresa
    }

}