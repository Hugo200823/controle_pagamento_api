import { Injectable } from "@nestjs/common";
import { Cliente } from "src/core/domain/Cliente";
import { ClienteEntity } from "../entities/Cliente.entity";

@Injectable()
export class ClienteMapper {

    public domainToModel(cliente: Cliente): ClienteEntity {
        const model = new ClienteEntity()
        model.setProps({
            cpf: cliente.getCpf(),
            dataVencimento: cliente.getDataVencimento(),
            empresa: cliente.getEmpresa(),
            isPago: cliente.getIsPago(),
            nome: cliente.getNome(),
            valor: cliente.getValor()
        })

        return model
    }

    public modelToDomain(cliente: ClienteEntity): Cliente {
        const domain = Cliente.Criar({
            cpf: cliente.cpf,
            dataVencimento: cliente.dataVencimento,
            empresa: cliente.empresa,
            isPago: cliente.isPago,
            nome: cliente.nome,
            valor: cliente.valor
        })
        return domain
    }

    public modelArrayToDomain(listaCliente: ClienteEntity[]): Cliente[] {
        const listaDomain = []
        for(let cliente of listaCliente) {
            const domain = this.modelToDomain(cliente)
            listaDomain.push(domain)
        }
        return listaDomain
    }
}