import { Empresa } from "../Empresa"

export interface EmpresaRepository {
    findByNome(nome: string): Promise<Empresa>
    findAll(): Promise<Empresa[]>
    save(empresa: Empresa, nomeAntigo?: string): Promise<void>
    delete(nome: string): Promise<void>
}