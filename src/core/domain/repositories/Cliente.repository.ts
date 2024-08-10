import { Cliente } from "../Cliente"
import { Empresa } from "../Empresa"

interface deletarClienteProps {
    nome: string
    cpf: string
}

export interface ClienteRepository {
    findByEmpresa(empresa: Empresa): Promise<Cliente[]>
    findByNome(nome: string): Promise<Cliente[]>
    findByCpf(cpf: string): Promise<Cliente[]>
    save(cliente: Cliente): Promise<void>
    delete(identificacao: deletarClienteProps): Promise<void>
    findAll(): Promise<Cliente[]>
}