import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeesDetailDto } from './create-employees-detail.dto';

export class UpdateEmployeesDetailDto extends PartialType(CreateEmployeesDetailDto) {}
