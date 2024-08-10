import { Inject, Injectable } from "@nestjs/common";
import { ClienteRepository } from "../domain/repositories/Cliente.repository";

@Injectable()
export class VirarMesClienteUseCase {

    constructor(
        @Inject('ClienteRepository')
        private readonly clienteRepository: ClienteRepository,
    ) {}

    async execute(): Promise<void> {
        const clientes = await this.clienteRepository.findAll()

        for await (let cliente of clientes) {
            cliente.virarMes()
            await this.clienteRepository.save(cliente)
        }
    }
}