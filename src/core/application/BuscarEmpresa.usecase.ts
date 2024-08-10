import { Inject, Injectable } from "@nestjs/common";
import { EmpresaRepository } from "../domain/repositories/Empresa.repository";
import { Empresa, EmpresaProps } from "../domain/Empresa";

interface buscarPorNomeProps {
    nome: string
  }

interface atualizaEmpresaProps extends buscarPorNomeProps {
    nomeAntigo: string
}

@Injectable()
export class BuscarEmpresaUseCase {

    constructor(
        @Inject('EmpresaRepository')
        private readonly empresaRepository: EmpresaRepository
    ) {}

    public async buscarEmpresaPorNome(nomeEmpresa: string) {
        const empresa = await this.empresaRepository.findByNome(nomeEmpresa)
        if(!empresa) throw new Error(`Empresa não encontrada: ${empresa}. Verifique se tá cadastrada`)
        return empresa
    }

    public async buscarEmpresas(): Promise<Empresa[]> {
        const empresa = await this.empresaRepository.findAll()
        if(!empresa) throw new Error(`Nenhuma empresa encontrada`)
        return empresa
    }

    public async novaEmpresa(props: EmpresaProps): Promise<Empresa> {
        const empresa = Empresa.Criar({
            nome: props.nome
        })
        await this.empresaRepository.save(empresa)
        return empresa
    }

    public async atualizaEmpresa(props: atualizaEmpresaProps): Promise<Empresa> {
        const empresa = Empresa.Criar({
            nome: props.nome
        })
     
        await this.empresaRepository.save(empresa, props.nomeAntigo)
        return empresa
    }

    public async removeEmpresa(props: buscarPorNomeProps): Promise<void> {
        await this.empresaRepository.delete(props.nome)
    }
}