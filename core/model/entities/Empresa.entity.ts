import { Cliente } from "src/core/domain/Cliente";
import { BaseEntity, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { ClienteEntity } from "./Cliente.entity";

export interface EmpresaEntityProps {
    nome: string
    clientes: Cliente[]
}

@Entity('empresa')
export class EmpresaEntity extends BaseEntity {
    @PrimaryColumn('varchar', {name: 'nome', primaryKeyConstraintName: 'empresa_pk'})
    nome: string

    @OneToMany(() => ClienteEntity, (cliente) => cliente.empresa)
    clientes: Cliente[]

    public setProps(props: EmpresaEntityProps) {
        this.nome = props.nome
        this.clientes = props.clientes
    }
}