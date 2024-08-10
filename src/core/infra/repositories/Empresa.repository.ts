import { Injectable } from "@nestjs/common";
import { EmpresaEntity } from "../entities/Empresa.entity";
import { EmpresaMapper } from "../mappens/Empresa.mapper";
import { Equal, ILike } from "typeorm";
import { Empresa } from "src/core/domain/Empresa";
import { EmpresaRepository } from "src/core/domain/repositories/Empresa.repository";
import { ClienteEntity } from "../entities/Cliente.entity";

@Injectable()
export class EmpresaRepositoryImpl implements EmpresaRepository {

    constructor(private readonly empresaMapper: EmpresaMapper) {}

    async findByNome(nome: string): Promise<Empresa> {
        const empresa = await EmpresaEntity.findOne({
            where: {
                nome: ILike(`%${nome}%`)
            }
        })

        if(!empresa) return null 
        const listaEmpresas = this.empresaMapper.modelToDomain(empresa)
        return listaEmpresas
    }

    async findAll(): Promise<Empresa[]> {
        const empresa = await EmpresaEntity.find()

        if(!empresa || empresa?.length == 0) return null 
        const listaEmpresas = this.empresaMapper.modelArrayToDomain(empresa)
        return listaEmpresas
    }

    async save(empresa: Empresa, nomeAntigo?: string): Promise<void> {
        let empresaModel
        empresaModel = this.empresaMapper.domainToModel(empresa)
        await EmpresaEntity.save(empresaModel)

        if(nomeAntigo) {
            empresaModel = await EmpresaEntity.findOne({
                where: {
                    nome: nomeAntigo
                }
            })

            await ClienteEntity.update({
                empresa: {
                    nome: Equal(nomeAntigo)
                }
            }, {
                empresa: {
                   nome: empresa.getNome()
                }
            })

            EmpresaEntity.remove(empresaModel)
        }

        return
    }

    async delete(nome: string): Promise<void> {
        try {
            const empresa = await EmpresaEntity.find({
                where: {
                    nome
                }
            })

            const clientes = await ClienteEntity.find({
                where: {
                    empresa: {
                        nome
                    }
                }
            })

            if(clientes) {
                await ClienteEntity.remove(clientes)
            }

            await EmpresaEntity.remove(empresa)
            return
             
        } catch (error) {
            console.log(error)
        }
    }
}