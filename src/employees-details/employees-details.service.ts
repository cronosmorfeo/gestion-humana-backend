import { Injectable } from '@nestjs/common';
import { CreateEmployeesDetailDto } from './dto/create-employees-detail.dto';
import { UpdateEmployeesDetailDto } from './dto/update-employees-detail.dto';

@Injectable()
export class EmployeesDetailsService {
  create(createEmployeesDetailDto: CreateEmployeesDetailDto) {
    return 'This action adds a new employeesDetail';
  }

  findAll() {
    return `This action returns all employeesDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeesDetail`;
  }

  update(id: number, updateEmployeesDetailDto: UpdateEmployeesDetailDto) {
    return `This action updates a #${id} employeesDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeesDetail`;
  }
}
