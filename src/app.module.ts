import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UseController } from './use/use.controller';
import { UseService } from './use/use.service';

@Module({
  imports: [],
  controllers: [AppController, UseController],
  providers: [AppService, UseService],
})
export class AppModule {}
