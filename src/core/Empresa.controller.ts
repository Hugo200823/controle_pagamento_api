import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Empresa, EmpresaProps } from "./domain/Empresa";
import { BuscarEmpresaUseCase } from "./application/BuscarEmpresa.usecase";

interface buscarPorNomeProps {
  nome: string
}

interface atualizaEmpresaProps extends buscarPorNomeProps {
  nomeAntigo: string
}

@Controller('/empresa')
export class EmpresaController {

    constructor(
        private readonly buscarEmpresaUseCase: BuscarEmpresaUseCase
    ) {}

    @Get('/')
    public async buscarEmpresas(): Promise<Empresa[]> {
      return await this.buscarEmpresaUseCase.buscarEmpresas();
    }

    @Post('/')
    public async novaEmpresa(@Body() props: EmpresaProps): Promise<Empresa> {
      return await this.buscarEmpresaUseCase.novaEmpresa(props);
    }

    @Put('/')
    public async atualizaEmpresa(@Body() props: atualizaEmpresaProps): Promise<Empresa> {
      return await this.buscarEmpresaUseCase.atualizaEmpresa(props);
    }

    @Delete('/:nome')
    public async excluiEmpresa(@Param() props: buscarPorNomeProps): Promise<void> {
      return await this.buscarEmpresaUseCase.removeEmpresa(props);
    }

    @Get('/:nome')
    public async buscarEmpresa(@Param() props: buscarPorNomeProps): Promise<Empresa> {
      return await this.buscarEmpresaUseCase.buscarEmpresaPorNome(props.nome);
    }

}