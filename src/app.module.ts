import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { CommercesModule } from './commerces/commerces.module';
import { EmployeesDetailsModule } from './employees-details/employees-details.module';

@Module({
  imports: [RolesModule, UsersModule, CommercesModule, EmployeesDetailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
