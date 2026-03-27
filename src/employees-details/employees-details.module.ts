import { Module } from '@nestjs/common';
import { EmployeesDetailsService } from './employees-details.service';
import { EmployeesDetailsController } from './employees-details.controller';

@Module({
  controllers: [EmployeesDetailsController],
  providers: [EmployeesDetailsService],
})
export class EmployeesDetailsModule {}
