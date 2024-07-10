const database = require('../../database/database')

class ClienteRepository {
    
    async findByEmpresa(nomeEmpresa) {
        const clientes = await ClienteEntity.find({
            where: {
                empresa: empresa
            }
        })

        const listaClientes = this.clienteMapper.modelArrayToDomain(clientes)
        return listaClientes
    }

    async findByNome(nome: string): Promise<Cliente[]> {
        const clientes = await ClienteEntity.find({
            where: {
                nome: ILike(nome)
            }
        })

        const listaClientes = this.clienteMapper.modelArrayToDomain(clientes)
        return listaClientes
    }

    async findByCpf(cpf: string): Promise<Cliente> {
        const cliente = await ClienteEntity.findOne({
            where: {
                cpf: cpf
            }
        })

        const listaClientes = this.clienteMapper.modelToDomain(cliente)
        return listaClientes
    }

    async save(cliente: Cliente): Promise<void> {
        const clienteModel = this.clienteMapper.domainToModel(cliente)
        await ClienteEntity.save(clienteModel)
        return
    }
}