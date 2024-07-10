import { Injectable } from "@nestjs/common";
import { EmpresaEntity } from "../entities/Empresa.entity";
import { EmpresaMapper } from "../mappens/Empresa.mapper";
import { ILike } from "typeorm";
import { Empresa } from "src/core/domain/Empresa";
import { EmpresaRepository } from "src/core/domain/repositories/Empresa.repository";

@Injectable()
export class EmpresaRepositoryImpl implements EmpresaRepository {

    constructor(private readonly empresaMapper: EmpresaMapper) {}

    async findByNome(nome: string): Promise<Empresa> {
        const empresa = await EmpresaEntity.findOne({
            where: {
                nome: ILike(nome)
            }
        })

        const listaEmpresas = this.empresaMapper.modelToDomain(empresa)
        return listaEmpresas
    }

    async save(empresa: Empresa): Promise<void> {
        const EmpresaModel = this.empresaMapper.domainToModel(empresa)
        await EmpresaEntity.save(EmpresaModel)
        return
    }
}