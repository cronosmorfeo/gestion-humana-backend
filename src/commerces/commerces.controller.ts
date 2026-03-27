import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommercesService } from './commerces.service';
import { CreateCommerceDto } from './dto/create-commerce.dto';
import { UpdateCommerceDto } from './dto/update-commerce.dto';

@Controller('commerces')
export class CommercesController {
  constructor(private readonly commercesService: CommercesService) {}

  @Post()
  create(@Body() createCommerceDto: CreateCommerceDto) {
    return this.commercesService.create(createCommerceDto);
  }

  @Get()
  findAll() {
    return this.commercesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commercesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommerceDto: UpdateCommerceDto) {
    return this.commercesService.update(+id, updateCommerceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commercesService.remove(+id);
  }
}
