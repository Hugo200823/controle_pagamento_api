import { Inject, Injectable } from "@nestjs/common";
import { EmpresaProps } from "../domain/Empresa";
import { ClienteRepository } from "../domain/repositories/Cliente.repository";
import { EmpresaRepository } from "../domain/repositories/Empresa.repository";
import { Cliente, ClienteProps } from "../domain/Cliente";

export interface NovoClienteProps extends Omit<ClienteProps, 'empresa'> {
    empresa: EmpresaProps
}

interface deletarClienteProps {
    nome: string
    cpf: string
}

@Injectable()
export class BuscarClienteUseCase {

    constructor(
        @Inject('ClienteRepository')
        private readonly clienteRepository: ClienteRepository,
        @Inject('EmpresaRepository')
        private readonly empresaRepository: EmpresaRepository
    ) {}

    public async buscarPorEmpresa(nomeEmpresa: string) {
        const empresa = await this.empresaRepository.findByNome(nomeEmpresa)
        if(!empresa) throw new Error(`Empresa não encontrada: ${empresa}. Verifique se tá cadastrada`)
        
        const clientes = await this.clienteRepository.findByEmpresa(empresa)
        return clientes
    }

    public async buscarPorCliente(identificacaoCliente: string) {

        const identificacao = Number(identificacaoCliente.replace(/[^0-9]/g, ''))
        const isCpf = identificacao && !isNaN(identificacao)
        let clientes = []
    
        if(isCpf) {
            const listaClientes = await this.clienteRepository.findByCpf(identificacaoCliente)
            if(listaClientes) {
                clientes = clientes.concat(listaClientes)
            }
        } else {
            const listaClientes = await this.clienteRepository.findByNome(identificacaoCliente);
            if(listaClientes && listaClientes.length > 0 ) {
                clientes = clientes.concat(listaClientes)
            }
        }
        
        return clientes
    }

    public async novoCliente(props: NovoClienteProps) {
        const empresa = await this.empresaRepository.findByNome(props.empresa.nome)
        if(!empresa) throw new Error(`A empresa não existe no banco: ${props.empresa}`)

        const cliente = Cliente.Criar({
            cpf: props.cpf,
            dataVencimento: props.dataVencimento,
            empresa: props.empresa,
            isPago: props.isPago,
            nome: props.nome,
            valor: props.valor,
            periodo: props.periodo
        })

        await this.clienteRepository.save(cliente)
        return cliente
    }

    public async deletarCliente(props: deletarClienteProps) {
        await this.clienteRepository.delete(props)
    }
}