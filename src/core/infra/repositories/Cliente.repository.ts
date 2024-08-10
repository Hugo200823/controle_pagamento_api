import { Injectable } from "@nestjs/common";
import { Empresa } from "src/core/domain/Empresa";
import { ClienteEntity } from "../entities/Cliente.entity";
import { ClienteMapper } from "../mappens/Cliente.mapper";
import { Cliente } from "src/core/domain/Cliente";
import { ILike } from "typeorm";
import { ClienteRepository } from "src/core/domain/repositories/Cliente.repository";
import { EmpresaMapper } from "../mappens/Empresa.mapper";

interface deletarClienteProps {
    nome: string
    cpf: string
}

@Injectable()
export class ClienteRepositoryImpl implements ClienteRepository {

    constructor(
        private readonly clienteMapper: ClienteMapper,
        private readonly empresaMapper: EmpresaMapper
    ) {}

    async findByEmpresa(empresa: Empresa): Promise<Cliente[]> {
        const empresaModel = this.empresaMapper.domainToModel(empresa)
        const clientes = await ClienteEntity.find({
            where: {
                empresa: empresaModel
            },
            relations: {
                empresa: true
            }
        })

        const listaClientes = this.clienteMapper.modelArrayToDomain(clientes)
        return listaClientes
    }

    async findByNome(nome: string): Promise<Cliente[]> {
        const clientes = await ClienteEntity.find({
            where: {
                nome: ILike(`%${nome}%`)
            },
            relations: {
                empresa: true
            }
        })
        const listaClientes = this.clienteMapper.modelArrayToDomain(clientes)
        return listaClientes
    }

    async findByCpf(cpf: string): Promise<Cliente[]> {
        const cliente = await ClienteEntity.find({
            where: {
                cpf: cpf
            },
            relations: {
                empresa: true
            }
        })

        const listaClientes = this.clienteMapper.modelArrayToDomain(cliente)
        return listaClientes
    }

    async save(cliente: Cliente): Promise<void> {
        const clienteModel = this.clienteMapper.domainToModel(cliente)
        await ClienteEntity.save(clienteModel)
        return 
    }

    async delete(identificacao: deletarClienteProps): Promise<void> {
        const where = {
            nome: identificacao.nome
        }

        if(identificacao.cpf) where['cpf'] = identificacao.cpf
        
        const clientes = await ClienteEntity.find({
            where
        })
        
        await ClienteEntity.remove(clientes)
        return
    }

    async findAll(): Promise<Cliente[]> {
        const cliente = await ClienteEntity.find({
            relations: {
                empresa: true
            }
        })
        const listaClientes = this.clienteMapper.modelArrayToDomain(cliente)
        return listaClientes
    }
}