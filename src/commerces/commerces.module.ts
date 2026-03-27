import { Module } from '@nestjs/common';
import { CommercesService } from './commerces.service';
import { CommercesController } from './commerces.controller';

@Module({
  controllers: [CommercesController],
  providers: [CommercesService],
})
export class CommercesModule {}
