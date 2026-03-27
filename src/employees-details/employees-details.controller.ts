import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeesDetailsService } from './employees-details.service';
import { CreateEmployeesDetailDto } from './dto/create-employees-detail.dto';
import { UpdateEmployeesDetailDto } from './dto/update-employees-detail.dto';

@Controller('employees-details')
export class EmployeesDetailsController {
  constructor(private readonly employeesDetailsService: EmployeesDetailsService) {}

  @Post()
  create(@Body() createEmployeesDetailDto: CreateEmployeesDetailDto) {
    return this.employeesDetailsService.create(createEmployeesDetailDto);
  }

  @Get()
  findAll() {
    return this.employeesDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeesDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeesDetailDto: UpdateEmployeesDetailDto) {
    return this.employeesDetailsService.update(+id, updateEmployeesDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeesDetailsService.remove(+id);
  }
}
