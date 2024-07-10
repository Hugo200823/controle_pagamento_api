import { Empresa } from "../Empresa"

export interface EmpresaRepository {
    findByNome(nome: string): Promise<Empresa>
    save(empresa: Empresa): Promise<void>
}