import { Empresa } from "src/core/domain/Empresa";
import { BaseEntity, Column, Entity, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { EmpresaEntity } from "./Empresa.entity";
import { PeriodoEnum } from "src/core/domain/Cliente";

export interface ClienteProps {
    cpf: string
    nome: string
    dataVencimento: Date
    valor: number
    isPago: boolean
    empresa: Empresa
    periodo: string
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

    @Column({name: 'periodo', type: 'varchar'})
    periodo: string

    @ManyToOne(() => EmpresaEntity, (empresa) => empresa.clientes)
    empresa: EmpresaEntity

    public setProps(props: ClienteProps) {
        const empresaEntity = new EmpresaEntity()
        empresaEntity.setProps({
            nome: props.empresa.getNome(),
            clientes: props.empresa.getClientes()
        })

        this.cpf = props.cpf
        this.nome = props.nome
        this.dataVencimento = props.dataVencimento
        this.valor = props.valor
        this.isPago = props.isPago
        this.empresa = empresaEntity
        this.periodo = props.periodo
    }

}