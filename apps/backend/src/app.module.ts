import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookModule } from './webhook/webhook.module';
import { ParserService } from './parser/parser.service';
import { ParserModule } from './parser/parser.module';

@Module({
  imports: [WebhookModule, ParserModule],
  controllers: [AppController],
  providers: [AppService, ParserService],
})
export class AppModule {}
