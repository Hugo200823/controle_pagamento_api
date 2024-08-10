import { Module } from '@nestjs/common';
import { ClienteController } from './Cliente.controller';
import { mappers } from './infra/mappens';
import { usecases } from './application';
import { ClienteRepositoryImpl } from './infra/repositories/Cliente.repository';
import { EmpresaRepositoryImpl } from './infra/repositories/Empresa.repository';
import { ConfigModule } from '@nestjs/config';
import { databaseProviders } from 'database.providers';
import { EmpresaController } from './Empresa.controller';

@Module({
    imports: [ConfigModule.forRoot()],
    controllers: [EmpresaController, ClienteController],
    providers: [
        ...databaseProviders,
        ...mappers,
        ...usecases,
        {
            provide: 'ClienteRepository',
            useClass: ClienteRepositoryImpl
        },
        {
            provide: 'EmpresaRepository',
            useClass: EmpresaRepositoryImpl
        }
    ],
})
export class CoreModule {}
