import { Inject, Injectable } from "@nestjs/common";
import { EmpresaProps } from "../domain/Empresa";
import { ClienteRepository } from "../domain/repositories/Cliente.repository";
import { EmpresaRepository } from "../domain/repositories/Empresa.repository";

@Injectable()
export class BuscarClienteService {

    buscarClienteRepository = new this.buscarClienteRepository()

    async buscarPorEmpresa(props) {
        const empresa = await this.empresaRepository.findByNome(props.nome)
        if(!empresa) throw new Error(`Empresa não encontrada: ${empresa}. Verifique se tá cadastrada`)
        
        const clientes = await this.clienteRepository.findByEmpresa(empresa)
        return clientes
    }
}