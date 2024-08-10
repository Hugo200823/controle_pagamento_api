import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BuscarClienteUseCase, NovoClienteProps } from "./application/BuscarCliente.usecase";
import { Cliente } from "./domain/Cliente";
import { VirarMesClienteUseCase } from "./application/VirarMesCliente.usecase";

interface buscarPorNomeProps {
  nome: string
}

interface deletarClienteProps extends buscarPorNomeProps {
  cpf: string
}

interface buscarClientesPorIdProps {
  id: string
}

@Controller('/cliente')
export class ClienteController {

    constructor(
        private readonly buscarClienteUseCase: BuscarClienteUseCase,
        private readonly virarMesUseCase: VirarMesClienteUseCase
    ) {}

    @Post('/')
    public async salvarCliente(@Body() props: NovoClienteProps): Promise<Cliente> {
      const cliente = await this.buscarClienteUseCase.novoCliente(props);
      return cliente
    }

    @Delete('/:nome/:cpf?')
    public async deletarCliente(@Param() props: deletarClienteProps): Promise<void> {
      const cliente = await this.buscarClienteUseCase.deletarCliente(props);
      return cliente
    }

    @Get('/empresa/:nome')
    public async buscarClientesPorEmpresa(@Param() props: buscarPorNomeProps): Promise<Cliente[]> {
      return await this.buscarClienteUseCase.buscarPorEmpresa(props.nome);
    }

    @Get('/:id')
    public async buscarClientesPorId(@Param() props: buscarClientesPorIdProps): Promise<Cliente[]> {
      return await this.buscarClienteUseCase.buscarPorCliente(props.id);
    }

    @Put('/virarMes')
    public async virarMesCliente(): Promise<void> {
      return await this.virarMesUseCase.execute()
    }
}