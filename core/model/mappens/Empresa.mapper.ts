import { Injectable } from "@nestjs/common";
import { Empresa } from "src/core/domain/Empresa";
import { EmpresaEntity } from "../entities/Empresa.entity";

@Injectable()
export class EmpresaMapper {

    public domainToModel(empresa: Empresa): EmpresaEntity {
        const model = new EmpresaEntity()
        model.setProps({
            clientes: empresa.getClientes(),
            nome: empresa.getNome(),
        })

        return model
    }

    public modelToDomain(empresa: EmpresaEntity): Empresa {
        const domain = Empresa.Criar({
            nome: empresa.nome,
            clientes: empresa.clientes,
        })
        return domain
    }

    public modelArrayToDomain(listaEmpresa: EmpresaEntity[]): Empresa[] {
        const listaDomain = []
        for(let Empresa of listaEmpresa) {
            const domain = this.modelToDomain(Empresa)
            listaDomain.push(domain)
        }
        return listaDomain
    }
}